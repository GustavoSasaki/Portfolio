import { useTranslation } from 'next-i18next'
import { MdSend } from 'react-icons/md'
import { GoRightIcon } from '../GoRightIcon'

export function SendEmailButton() {

    const { t } = useTranslation('contact')

    return (
        <button type="submit"
            className={` rounded-3xl px-5 py-3
            flex justify-center items-center group relative
            bg-accent hover:bg-accent-600  focus:bg-accent-600 
            hover:pl-3
            transition-all ease-out duration-300`}
        >
            <p className="text-lg font-bold transition-all ease-out duration-300 group-hover:mr-6">
                {t('button')}
            </p>
            <GoRightIcon>
                <MdSend />
            </GoRightIcon>

        </button>
    )
}
