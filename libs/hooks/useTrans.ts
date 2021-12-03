import { useRouter } from 'next/router'
import en from '../../assets/i18n/en/en.json'
import vi from '../../assets/i18n/vi/vi.json'

const useTrans = () => {
    const { locale } = useRouter()


    const trans = locale === 'vi' ? vi : en

    return trans
}

export default useTrans