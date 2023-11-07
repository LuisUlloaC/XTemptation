const CardContainer = ({className, children}) => {

    return (
        <div className={className} style={{borderRadius: 8}}>
            {children}
        </div>
    );
}

export default CardContainer;
