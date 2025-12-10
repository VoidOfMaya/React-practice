import PropTypes from "prop-types"

export function Button({name}){
    return(
        <>
            <button>{name}</button>
        </>
    )
}
//basic proptype decleration
Button.propTypes ={
    //  requires that property is typed to string in this specific case
    name: PropTypes.string.isRequired,
};
// declaring a default property  with defaultProps
Button.defaultProps ={
    name: 'Click me Now',
}
//List of all available  proptypes that can be validated against:-
/*
***.isRequired can be chained to any of these validators to insure an error is thrown when validators return false
basic validators:
- PropTypes.array,
- PropTypes.bool,
- PropTypes.func,
- PropTypes.number,
- PropTypes.object,
- PropTypes.string,
- PropTypes.symbol,

other validators:

- PropTypes.node,
- PropTypes.element,
- PropTypes.elementType,
- PropTypes.instanceOf(someElement),
- PropTypes.oneOf(['News', 'Photos']),
- PropTypes.oneOfType([PropTypes.string,
                       PropTypes.number,
                       PropTypes.instanceOf(Message)
                       ]),
- PropTypes.arrayOf(PropTypes.number),
- PropTypes.objectOf(PropTypes.number),
- PropTypes.shape({color: PropTypes.string,
                   fontSize: PropTypes.number
                   }),
- PropTypes.exact({name: PropTypes.string,
                   quantity: PropTypes.number
                   }),
- PropTypes.any


*/
// custom prop types can be declared as such:
Button.propTypes = {
    CustomProp: function(props, propName, componentName){
        if(!/match/.test(props[propName])){
            return new Error(
                'Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation faild.'
            );
        }
    }
}
//custom prop types can also be used with arrayOf and objectOf validators
Button.propTypes = {
    customArrayProp: PropTypes.arrayOf(function(propVal, key, compName, location, propFullName){
        if(!/match/.test(propVal[key])){
            return new Error(
                'Invalid prop `' + propFullName + '` supplied to' + ' `' + compName + '`. Validation faild.'
            );
        }
    })
};