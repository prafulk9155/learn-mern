export default function PropsComponent(props) {
    return (
        <>
            <p>Props data</p>
            {
                props.userdata.map((item, index) => {
                    return (
                        <>
                            <hr />
                            <p>Name : {item.name}</p>
                            <p>Age : {item.age}</p>
                            <p>Address : {item.address}</p>

                        </>
                    )

                })
            }
            <hr />



            {/* click event add in pops component  */}
            { props.setValueOnclick && <h4>{props.setValueOnclick}</h4> }

        </>
    )
    
}