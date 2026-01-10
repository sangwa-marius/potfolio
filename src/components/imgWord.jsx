function Container({img, text}){
    return(
        <>
            <span className='container'><img src={img}/><p>{text}</p></span>
        </>
    )

}

export default Container;