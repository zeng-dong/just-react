import './EnrolList.css';
import { DetailsList } from '@fluentui/react/lib/DetailsList';
import { useEffect } from 'react';

const columns = [
    {
        key: 'edit',
        name: 'Edit',
        fieldName: 'edit',
        minWidth: 30,
        maxWidth: 200,
        isResizable: true
    },
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
    },
    {
        key: 'delete',
        name: 'Delete',
        fieldName: 'delete',
        minWidth: 50,
        maxWidth: 200,
        isResizable: true
    }
];

let items = [];

const EnrolList = (props) => {
    useEffect(() => {
        const curItemKey = props.studentDetails.key;
        if (curItemKey) {
            items = [...items, props.studentDetails];
            props.setStudentDetails({});
        }

        if (props.action === 'delete') {
            const deleteItem = items.filter(
                (i) => i.key === props.selectedItemId
            )[0];

            items = items.filter((i) => i !== deleteItem);

            props.restoreSeats(deleteItem.program);
        }
    }, [props]);

    return (
        <div className="enrolList">
            <DetailsList items={items} columns={columns} />
        </div>
    );
};

export default EnrolList;
