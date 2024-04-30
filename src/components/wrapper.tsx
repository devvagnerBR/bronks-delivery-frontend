

export default async  function Wrapper( { children }: React.PropsWithChildren ) {

    return (
        <div className="max-w-[1280px] m-auto flex items-center flex-col justify-center max-xl:px-4 max-xms:p-2">
            {children}
        </div>
    );
}