import React, {useEffect, useState} from 'react';
import './Select.css';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap';
const Select = ({onChange}) => {
    let options = ['']

    const [userSelect, setUserSelect] = useState([''])

    useEffect(() => {
        //fetch data
        let url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then((response) => response.json())
            .then(json => setUserSelect(['',...json]));
    }, [userSelect])

    return (
        <div class = 'container wrapper'>
        <select class="form-select form-select-sm"  aria-label=".form-select-lg example" onChange={event => onChange(event.target.value)}>
            {userSelect.map((option,index) =>
                    <option key={index} value={index}>
                        {option.name}
                    </option>
                )}
        </select>

        </div>
    );
};

export default Select;