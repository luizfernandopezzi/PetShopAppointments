const Footer = () => {
    return(
        <div className = "bg-gray-200 text-center p-4">
            <div className = "container mx-auto text-black font-thin">
                Developed by:{" "}
                <span> Luiz Fernando Pezzi</span> /{" "}
                <a className="hover:underline" href="https://www.linkedin.com/in/luizfernandopezzi/">Linkedin</a> {""}/{" "}
                <a className="hover:underline" href="https://github.com/luizfernandopezzi">Github</a>
            </div>

            <div className = "container mx-auto mt-2" >
                <a href="https://scitechmundus.com.br/" ><img className = "mx-auto inline p-4" src="./scitechMundus.png" alt="Scitech Mundus"/></a>
            </div>
        </div>
    )
}

export default Footer