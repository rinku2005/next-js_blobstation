    import Image from 'next/image'
    
    function ImagPage (){
        return (
            <div>
                {
                    ['blob', 'service1','service2','service3','service4','tailored-1' ].map ( path => {
                        return(
                            <div key={path}>
                                <Image       src={'/${path.svg}'} alt='img' width='100%' height='100%' />
                                </div>
                        )
                    })
                }
            </div>
        )
    }

    export default ImagPage;        