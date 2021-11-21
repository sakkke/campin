import { writable } from 'svelte/store'

export const activeCamp = writable(0)
export const campingTime = writable(25 * 60 * 1000 /* minutes */)
export const finishTime = writable(0)
export const pluscodes = writable([
  '8FW4V75V+8Q', // エッフェル塔
  '87G7MXQ4+M5', // 自由の女神
  '8Q7XMQJ8+FR', // 東京駅
  '7QR96P89+RQ', // 首里城
  '87G8Q2JM+F9', // セントラルパーク
])