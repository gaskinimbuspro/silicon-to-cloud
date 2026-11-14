#!/usr/bin/env bash
# ci: yes
# Chapter 2 · Same work, sorted vs unsorted data: branch prediction in action.
source "$(dirname "$0")/../lib.sh"; need gcc; set -e
cd "$(mktemp -d)"
cat > branch.c <<'C'
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int cmp(const void*a,const void*b){return *(int*)a-*(int*)b;}
int main(int c,char**v){int n=1<<24,*a=malloc(n*4);srand(1);
 for(int i=0;i<n;i++)a[i]=rand()%256; if(c>1)qsort(a,n,4,cmp);
 clock_t t=clock(); long s=0;
 for(int r=0;r<10;r++)for(int i=0;i<n;i++)if(a[i]>=128)s+=a[i];
 printf("loop=%.2fs\n",(double)(clock()-t)/CLOCKS_PER_SEC);}
C
gcc -O0 branch.c -o branch
step "Unsorted (unpredictable branch)"; ./branch
step "Sorted (predictable branch)";    ./branch sorted
note "The sorted run is usually 2-4x faster: fewer mispredictions = fewer pipeline flushes. (2.3)"
