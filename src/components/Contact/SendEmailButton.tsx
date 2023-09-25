export function SendEmailButton() {

    return (
        <button type="submit"
            className={` rounded-3xl px-5 py-3
        flex justify-center items-center
        bg-accent group-hover:bg-accent-600  group-focus:bg-accent-600`}
        >
            <p className="text-sm font-bold">
                Send Email
            </p>
        </button>
    )
}
