export const sleep = (time: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })

export const request = (req: any) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (req === 0) {
        reject(new Error('request fail'))
      } else {
        resolve('request success')
      }
    }, 1000),
  )
