#!/usr/bin/env bash
# Chapter 1 · Raw keyboard events from evdev (needs a real keyboard + root; not in Codespaces/CI).
source "$(dirname "$0")/../lib.sh"; need evtest
step "Input devices the kernel knows"
grep -E '^N: |^H: ' /proc/bus/input/devices | paste - - | head
step "Run: sudo evtest   → pick your keyboard, press A, see EV_KEY KEY_A 1 / 0"
