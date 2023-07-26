import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widget/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';

const ProfilePage = () => {
    const { id } = useParams<{id: string}>();
    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>

    );
};

export default ProfilePage;
