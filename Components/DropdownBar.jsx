import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function DropdownBar() {
    return (
        <div style={{ marginTop: '50px' }}>
            <Dropdown as={NavItem} >
                <Dropdown.Toggle as={NavLink} style={{ color: 'white' }}>Sort By</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Popular</Dropdown.Item>
                    <Dropdown.Item>Newest</Dropdown.Item>
                    <Dropdown.Item>Older</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default DropdownBar;