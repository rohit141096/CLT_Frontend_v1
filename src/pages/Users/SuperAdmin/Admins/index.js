import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import DefaultHeader from '../../../../components/dashboard/common/PageHeaders/DefaultHeader';
import DefaultContent from '../../../../components/dashboard/common/PageHeaders/HeaderWidgets/DefaultContent';
import HeaderActions from '../../../../components/dashboard/common/PageHeaders/HeaderWidgets/HeaderActions';
import DashboardHeaderSearchBar from '../../../../components/core/form/DashboardHeaderSearchBar';
import Button from '../../../../components/core/dashboard/Button';
import { icons } from '../../../../constants';
import PlainContainer from '../../../../components/core/containers/PlainContainer';
import Card from '../../../../components/core/dashboard/Card';
import Table from '../../../../components/core/table/containers/Table';
import TableHeading from '../../../../components/core/table/containers/TableHeading';
import TableHeadingItem from '../../../../components/core/table/containers/TableHeadingItem';
import TableCheckbox from '../../../../components/core/table/inputs/Checkbox';
import TableRows from '../../../../components/core/table/containers/TableRows';
import TableRow from '../../../../components/core/table/containers/TableRow';
import TableRowItem from '../../../../components/core/table/containers/TableRowItem';
import TableRowIcons from '../../../../components/core/table/containers/TableRowIcons';
import TableRowIcon from '../../../../components/core/table/containers/TableRowIcon';
import TableRowActions from '../../../../components/core/table/containers/TableRowActions';
import TableButton from '../../../../components/core/table/inputs/Button';
import AdminUsersFilters from './AdminUsersFilters';

const SuperAdminAdminUsersPage = ({user}) => {
    const navigate = useNavigate();
    
    const [search, setSearch] = useState("");
    const [showSearchAction, setShowSearchAction] = useState(false);

    useEffect(() => {
        if(search.length > 0){
            setShowSearchAction(true);
        }
        else{
            setShowSearchAction(false);
        }
    }, [search]);

    let date = new Date();

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
                    <DashboardHeaderSearchBar showAction={showSearchAction} action={''}>
                        <input type="text" className="cmsDashboardHeaderSearchBarInputTxt" placeholder="Search User" onChange={(e) => setSearch(e.target.value)} value={search} />
                    </DashboardHeaderSearchBar>

                    <Button 
                        type="button"
                        bgType="fill"
                        width="auto"
                        bg="dashboard"
                        borderRadius="full"
                        hasIcon={true}
                        iconPosition="left"
                        icon={icons.add}
                        action={()=> navigate('add') }
                    >
                        Add New
                    </Button>
                        
                </HeaderActions>
            </DefaultHeader>

            <PlainContainer type="full" styles={{padding: '30px'}}>
                <Card hasHeading={false} isBottomAction={false}>
                    <PlainContainer type="full" styles={{marginBottom: '25px'}}>
                        <PlainContainer type="full" styles={{paddingTop: "15px", paddingRight: "25px", paddingBottom: "25px", paddingLeft: "25px"}}>
                            <AdminUsersFilters />
                        </PlainContainer>

                        <PlainContainer type='full'>
                            <Table>
                                <TableHeading>
                                    <TableHeadingItem size={0} hasChildren={true}>
                                        <TableCheckbox name={"items-selected-ckb"} />
                                    </TableHeadingItem>
                                    <TableHeadingItem size={3} lable={"full name"} />
                                    <TableHeadingItem size={0} lable={"role"} />
                                    <TableHeadingItem size={1} lable={"last login"} />
                                    <TableHeadingItem size={0} lable={""} />
                                    <TableHeadingItem size={2} lable={"Actions"} />
                                </TableHeading>
                                <TableRows>
                                    <TableRow isCenter={false}>
                                        <TableRowItem size={0} hasChildren={true} isCenter={false}>
                                            <TableCheckbox name={`items-selected-ckb-${1}`} />
                                        </TableRowItem>
                                        <TableRowItem size={3} isCenter={false} hasPreview={true} previewType={'image'} previewItem={'/images/default-avatar.jpg'} lable={'sharath bharadwaj'} />
                                        <TableRowItem size={0} isCenter={false} lable={'admin'} />
                                        <TableRowItem size={1} isCenter={false} lable={moment(date).format('DD/MM/YY, h:mm a')} />
                                        <TableRowItem size={0} isCenter={true} hasChildren={true}>
                                            <TableRowIcons>
                                                <TableRowIcon icon={icons.eye} color={"dark"} action={() => console.log()} />
                                            </TableRowIcons>
                                        </TableRowItem>
                                        <TableRowItem size={2} isCenter={false} hasChildren={true}>
                                            <TableRowActions>
                                                <TableButton icon={icons.pencil} iconPosition={"left"} hasIcon={true} bg={"dashboard"}>edit</TableButton>
                                                <TableButton icon={icons.removePlain} iconPosition={"left"} hasIcon={true} bg={"warning"} action={() => console.log('')}>delete</TableButton>
                                            </TableRowActions>
                                        </TableRowItem>
                                    </TableRow>
                                </TableRows>
                            </Table>
                        </PlainContainer>
                    </PlainContainer>
                </Card>
            </PlainContainer>
        </>
    )
}

export default SuperAdminAdminUsersPage