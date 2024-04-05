import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultHeader from '../../../../../components/dashboard/common/PageHeaders/DefaultHeader';
import DefaultContent from '../../../../../components/dashboard/common/PageHeaders/HeaderWidgets/DefaultContent';
import HeaderActions from '../../../../../components/dashboard/common/PageHeaders/HeaderWidgets/HeaderActions';
import Button from '../../../../../components/core/dashboard/Button';
import { icons } from '../../../../../constants';
import PlainContainer from '../../../../../components/core/containers/PlainContainer';
import Card from '../../../../../components/core/dashboard/Card';
import UserAddForm from '../../../../../components/dashboard/page/User/UserAddForm';
import UserAddFormPreview from '../../../../../components/dashboard/page/User/UserAddFormPreview';

const SuperAdminAddAdminUserPage = ({user}) => {
    const navigate = useNavigate();

    return(
        <>
            <DefaultHeader>
                <DefaultContent 
                    heading='Users'
                    descriptionIcon={''}
                    hasDescriptionIcon={false}
                    description='2 Admins, 5 Creators, 3 Moderators, 2 Approvers.'
                />
                <HeaderActions>
                    <Button 
                        type="button"
                        bgType="fill"
                        width="auto"
                        bg="dashboard"
                        borderRadius="full"
                        hasIcon={true}
                        iconPosition="left"
                        icon={icons.list}
                        action={()=> navigate('/general/users/admins') }
                    >
                        View Admins
                    </Button>
                        
                </HeaderActions>
            </DefaultHeader>
            <PlainContainer type="full" styles={{padding: '30px'}}>
                <Card hasHeading={false} isBottomAction={false}>
                    <PlainContainer type='full' styles={{paddingTop: "15px", paddingLeft: "25px", paddingRight: "25px", paddingBottom: "25px"}}>
                        <UserAddFormPreview user={user} role="admin" />
                    </PlainContainer>
                </Card>
            </PlainContainer>
        </>
    )
}

export default SuperAdminAddAdminUserPage