import { useEffect } from 'react'

declare global {
  interface Window {
    Kakao: any
  }
}

function useLoadKakao() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js'
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY)
      }
    }
  }, [])
}

export default useLoadKakao
