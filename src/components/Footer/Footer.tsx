import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { ResumeButton } from '../SocialMediaButton/ResumeButton';
import { SocialMediaButton } from '../SocialMediaButton/SocialMediaButton';
import { linkedinUrl, githubUrl } from '../SocialMediaButton/SocialMediaUrl';
import { HomeButton } from '../NavBar/NavBar';

export function Footer() {
    return (
        <footer className=" h-min-6 bg-primary-light pt-4 pb-3">
            <div className="flex justify-between items-center gap-1 gu-container">
                <a href="." className="h-[70px] w-[70px] bg-accent-400 rounded-full group md:hidden mb-2" title="Home">
                    <ArrowDropUpIcon className='h-[70px] w-[70px] scale-y-150 text-secondary
                        transition-all duration-200 hover:duration-300 linear group-hover:-translate-y-1'
                    />
                </a>
                <div className=" hidden md:flex items-center">
                    <HomeButton />
                </div>

                <div className=" hidden md:flex items-center">
                    <Copyright />
                </div>

                <div className="ml-auto md:ml-0 flex items-center ">
                    <SocialMediaButton href={linkedinUrl} title="LinkedIn">
                        <LinkedInIcon className="h-[45px] w-[45px] text-secondary" />
                    </SocialMediaButton>

                    <SocialMediaButton href={githubUrl} title="Resume" className='mr-3'>
                        <GitHubIcon className="h-[40px] w-[40px] text-secondary" />
                    </SocialMediaButton>

                    <ResumeButton variant={'footer'} />
                </div>

            </div>

            <div className=" md:hidden gu-container">
                <Copyright />
            </div>
        </footer>
    )
}


function Copyright() {
    return (
        <p className="text-secondary-darker font-medium text-sm">
            © 2023 | Design and build by Gustavo Roncaglia
        </p>
    )
}