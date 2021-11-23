import { writable } from 'svelte/store'

function persistentStore (k, v) {
  const result = writable(JSON.parse(localStorage.getItem(k)) || v)
  result.subscribe(value => localStorage.setItem(k, JSON.stringify(value)))
  return result
}

export const activeCamp = persistentStore('activeCamp', 0)
export const campingTime = persistentStore('finishTimeUnit', 25 * 60 * 1000 /* minutes */)
export const finishTime = persistentStore('finishTime', 0)
export const pluscodes = persistentStore('pluscodes', [
  '8FW4V75V+8Q', // エッフェル塔
  '87G7MXQ4+M5', // 自由の女神
  '8Q7XMQJ8+FR', // 東京駅
  '7QR96P89+RQ', // 首里城
  '87G8Q2JM+F9', // セントラルパーク
])
export const stats = persistentStore('stats', [])