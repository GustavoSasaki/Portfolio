import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { ResumeButton } from '../SocialMediaButton/ResumeButton';
import { SocialMediaButton } from '../SocialMediaButton/SocialMediaButton';
import { linkedinUrl, githubUrl } from '../SocialMediaButton/SocialMediaUrl';

export function Footer() {
    return (
        <footer className="container h-min-6 bg-primary-light pt-4 pb-3">
            <div className="flex justify-between items-center gap-1">
                <a href="." className="h-[70px] w-[70px] bg-accent-400 rounded-full group" title="Home">
                    <ArrowDropUpIcon className='h-[70px] w-[70px] scale-y-150 text-secondary
                        transition-all duration-200 hover:duration-300 linear group-hover:-translate-y-1'
                    />
                </a>

                <SocialMediaButton href={linkedinUrl} title="LinkedIn" className='ml-auto'>
                    <LinkedInIcon className="h-[45px] w-[45px] text-secondary" />
                </SocialMediaButton>

                <SocialMediaButton href={githubUrl} title="Resume" className="mr-1">
                    <GitHubIcon className="h-[40px] w-[40px] text-secondary" />
                </SocialMediaButton>


                <ResumeButton variant={'footer'} />

            </div>

            <p className="text-secondary-darker font-medium text-sm mt-2">
                © 2023 | Design and build by Gustavo Roncaglia
            </p>
        </footer>
    )
}