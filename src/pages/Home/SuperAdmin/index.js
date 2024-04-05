import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icons from '../../../constants/icons';
import BasicBigHeader from '../../../components/dashboard/common/PageHeaders/BasicBigHeader';
import ContentWithUserDetails from '../../../components/dashboard/common/PageHeaders/HeaderWidgets/ContentWithUserDetails';
import HeaderActions from '../../../components/dashboard/common/PageHeaders/HeaderWidgets/HeaderActions';
import Button from '../../../components/core/dashboard/Button';
import BasicStats from '../../../components/dashboard/common/BasicStats';
import BasicStat from '../../../components/dashboard/common/BasicStats/BasicStat';
import PlainContainer from '../../../components/core/containers/PlainContainer';
import SplitContainer from '../../../components/core/containers/SplitContainer';
import Card from '../../../components/core/dashboard/Card';
import BasicListItem from '../../../components/dashboard/common/Requests/BasicListItem';
import BasicActivitiesList from '../../../components/dashboard/common/Activities/BasicActivitiesList';
import BasicActivityListItem from '../../../components/dashboard/common/Activities/BasicActivityListItem';

const SuperAdminHomePage = ({user, socket, socketActivity}) => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    
    useEffect(() => {
        let nameArray = user.name.split(" ");
        setFirstName(nameArray[0]);
    }, [user]);

    // useEffect(() => {
    //     socketActivity.on("user_loggedin", (data) => {
    //         //setIsLatest(false);
    //         console.log(data);
    //         alert('New Login');
    //     });
    // }, [socketActivity]);

    return(
        <>
            <BasicBigHeader>
                <ContentWithUserDetails 
                    avatar={'/images/default-avatar.jpg'}
                    heading={`welcome back, ${firstName}!`}
                    descriptionIcon={icons.bellSolid}
                    hasDescriptionIcon={true}
                    description='You have 2 new notifications and 10 pending approvals!'
                />

                <HeaderActions>
                    <Button 
                        type="button"
                        bgType="fill"
                        width="auto"
                        bg="primary"
                        borderRadius="full"
                        hasIcon={true}
                        iconPosition="left"
                        icon={icons.tickCircle}
                    >
                        pending approvals
                    </Button>
                    <Button 
                        type="button"
                        bgType="fill"
                        width="auto"
                        bg="dashboard"
                        borderRadius="full"
                        hasIcon={true}
                        iconPosition="left"
                        icon={icons.settingsGear}
                    >
                        settings
                    </Button>
                </HeaderActions>
            </BasicBigHeader>

            <BasicStats>
                <BasicStat 
                    cardHeading={"Websites"}
                    statCount={459}
                    statLable="In Production"
                    cardStatColor="blue"
                    secondaryStatLable="Under Progress"
                    secondaryStatCount={20}
                    statId={`websites`}
                    //headingActionIcon={icons.rightArrow}
                />
                <BasicStat 
                    cardHeading={"Pending Requests"}
                    statCount={21}
                    statLable="Website Creation"
                    cardStatColor="red"
                    secondaryStatLable="Feature Updates"
                    secondaryStatCount={12}
                    statId={`pendingRequests`}
                />
                <BasicStat 
                    cardHeading={"Pending Approvals"}
                    statCount={68}
                    statLable="Critical Approvals"
                    cardStatColor="yellow"
                    secondaryStatLable="Regular"
                    secondaryStatCount={20}
                    statId={`pendingApprovals`}
                />
                <BasicStat 
                    cardHeading={"Users"}
                    statCount={157}
                    statLable="Nodal Officers"
                    cardStatColor="green"
                    secondaryStatLable="Staff Under Owner"
                    secondaryStatCount={20}
                    statId={`users`}
                />
            </BasicStats>

            <PlainContainer type="full" styles={{paddingLeft: '30px', paddingRight: '30px'}}>
                <SplitContainer type="full" styles={{margin: '0px', flex: '50%'}}>
                    <PlainContainer type="full">
                        <Card 
                            heading={"recent requests"} 
                            isHeadingAction={false} 
                            isBottomAction={true} 
                            isBottomPrimaryAction={true} 
                            bottomPrimaryActionLable={"see all recent requests"}
                        >
                            <PlainContainer type="full" styles={{marginTop: '5px'}}>
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                            </PlainContainer>
                        </Card>
                    </PlainContainer>
                    <PlainContainer type="full">
                        <Card 
                            heading={"pending approvals"} 
                            isHeadingAction={false} 
                            isBottomAction={true} 
                            isBottomPrimaryAction={true} 
                            bottomPrimaryActionLable={"see all recent approvals"}
                        >
                            <PlainContainer type="full" styles={{marginTop: '5px'}}>
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                            </PlainContainer>
                        </Card>
                    </PlainContainer>
                </SplitContainer>
            </PlainContainer>

            <PlainContainer type="full" styles={{paddingLeft: '30px', paddingRight: '30px', marginTop: '30px', marginBottom: '30px'}}>
                <SplitContainer type="full"styles={{margin: '0px', flex: '50%'}}>
                    <PlainContainer type="full">
                        <Card 
                            heading={"recent complaints"} 
                            isHeadingAction={false} 
                            isBottomAction={true} 
                            isBottomPrimaryAction={true} 
                            bottomPrimaryActionLable={"see all recent complaints"}
                        >
                            <PlainContainer type="full" styles={{marginTop: '5px'}}>
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                                <BasicListItem 
                                    heading={"new website creation"}
                                    hasPrimaryInfo={true}
                                    hasPrimaryInfoIcon={true}
                                    primaryInfoHeading={"social audit directorate"}
                                    primaryInfoIcon={icons.sitemap}
                                    hasSecondaryInfo={true}
                                    hasSecondaryInfoIcon={true}
                                    secondaryInfoHeading={"monday, 10:34 am"}
                                    secondaryInfoIcon={icons.clockSolid}
                                    hasAction={true}
                                    actionIcon={icons.rightArrow}
                                    action={() => navigate('/')}
                                />
                            </PlainContainer>
                        </Card>
                    </PlainContainer>
                    <PlainContainer type="full">
                        <Card 
                            heading={"recent activities"} 
                            isHeadingAction={false} 
                            isBottomAction={true} 
                            isBottomPrimaryAction={true} 
                            bottomPrimaryActionLable={"see all recent activities"}
                        >
                            <PlainContainer type="full" styles={{marginTop: '5px', padding: '0px 25px'}}>
                                <BasicActivitiesList>
                                    <BasicActivityListItem 
                                        activityType="updated"
                                        activityBy="sharath"
                                        activityIcon={icons.image}
                                        activityPrimaryEntity="disclaimer"
                                        activitySecondaryEntity="defaults"
                                        activityTime={"monday, 10:50 am"}
                                        activityLink="/"
                                    />
                                    <BasicActivityListItem 
                                        activityType="updated"
                                        activityBy="sharath"
                                        activityIcon={icons.add}
                                        activityPrimaryEntity="disclaimer"
                                        activitySecondaryEntity="defaults"
                                        activityTime={"monday, 10:50 am"}
                                        activityLink="/"
                                    />
                                    <BasicActivityListItem 
                                        activityType="updated"
                                        activityBy="sharath"
                                        activityIcon={icons.add}
                                        activityPrimaryEntity="disclaimer"
                                        activitySecondaryEntity="defaults"
                                        activityTime={"monday, 10:50 am"}
                                        activityLink="/"
                                    />
                                    <BasicActivityListItem 
                                        activityType="updated"
                                        activityBy="sharath"
                                        activityIcon={icons.add}
                                        activityPrimaryEntity="disclaimer"
                                        activitySecondaryEntity="defaults"
                                        activityTime={"monday, 10:50 am"}
                                        activityLink="/"
                                    />
                                    <BasicActivityListItem 
                                        activityType="updated"
                                        activityBy="sharath"
                                        activityIcon={icons.add}
                                        activityPrimaryEntity="disclaimer"
                                        activitySecondaryEntity="defaults"
                                        activityTime={"monday, 10:50 am"}
                                        activityLink="/"
                                    />
                                </BasicActivitiesList>
                            </PlainContainer>
                        </Card>
                    </PlainContainer>
                </SplitContainer>
            </PlainContainer>
        </>
    )
}

export default SuperAdminHomePage