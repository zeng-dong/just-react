import './EnrolList.css';
import { DetailsList } from '@fluentui/react/lib/DetailsList';
import { useEffect } from 'react';

const columns = [
    {
        key: 'fname',
        name: 'First Name',
        fieldName: 'fname',
        minWidth: 90,
        maxWidth: 200,
        isResizable: true
    },
    {
        key: 'lname',
        name: 'Last Name',
        fieldName: 'lname',
        minWidth: 90,
        maxWidth: 200,
        isResizable: true
    },
    {
        key: 'program',
        name: 'Program',
        fieldName: 'program',
        minWidth: 60,
        maxWidth: 200,
        isResizable: true
    },
    {
        key: 'email',
        name: 'Email',
        fieldName: 'email',
        minWidth: 130,
        maxWidth: 200,
        isResizable: true
    }
];

let items = [];
for (let i = 1; i < 5; i++) {
    items.push({
        key: i,
        fname: 'FirstName ' + i,
        lname: 'LastName ' + i,
        program: 'UG',
        email: 'Email ' + i
    });
}

const EnrolList = (props) => {
    useEffect(() => {
        const curItemKey = props.studentDetails.key;
        if (curItemKey) {
            items = [...items, props.studentDetails];
            props.setStudentDetails({});
        }
    }, [props]);

    return (
        <div className="enrolList">
            <DetailsList items={items} columns={columns} />
        </div>
    );
};

export default EnrolList;
