import React from 'react';
import { connect } from 'react-redux';
import { IUser, IAppState, IAppUserState } from '../../Types/AppTypes';
import { getCurrentUser } from '../../Services/authService';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { ProfileContainer, ProfileImage, UserName, UserTitle, ProfileInfoContainer, InfoContainer, InfoKey, InfoValue } from './ProfileStyledComponents';
import image from '../Login/Assets/icon_login_grey.png';

export interface ProfileProps {
    user: IUser | null;
}

const Profile: React.SFC<ProfileProps> = (props: ProfileProps) => {
    const user: IUser = getCurrentUser() as IUser;

    return (
        <Container >
            <ProfileContainer>
                <Row>
                    <Col offset={3} smOffset={3} lgOffset={5} xlOffset={5} mdOffset={4}>
                        <ProfileImage src={image} alt="profile"></ProfileImage>
                    </Col>
                </Row>
                <Row>
                    <Col offset={3} smOffset={3} mdOffset={4} lgOffset={5} xlOffset={5}>
                        <UserName>{user?.name}</UserName>
                    </Col>
                    <Col offset={3} smOffset={3} mdOffset={4} lgOffset={5} xlOffset={5}>
                        <UserTitle>{user?.title}</UserTitle>
                    </Col>
                </Row>
                <Row>
                    <Col col={10} offset={1}>
                        <ProfileInfoContainer>
                            <Row>
                                <Col col={12}>

                                    <InfoContainer>
                                        <Row>
                                            <Col md={3} lg={2}><InfoKey>Bio  :</InfoKey></Col>
                                            <Col md={9} lg={10}><InfoValue>{user?.bio}</InfoValue></Col>
                                        </Row>
                                    </InfoContainer>

                                    <InfoContainer>
                                        <Row>
                                            <Col md={3} lg={2}><InfoKey>Birthday  :</InfoKey></Col>
                                            <Col md={9} lg={10}><InfoValue>{user?.dateOfBirth}</InfoValue></Col>
                                        </Row>
                                    </InfoContainer>

                                    <InfoContainer>
                                        <Row>
                                            <Col md={3} lg={2}><InfoKey>Age  :</InfoKey></Col>
                                            <Col md={9} lg={10}><InfoValue>{`${user?.age} years`}</InfoValue></Col>
                                        </Row>
                                    </InfoContainer>

                                    <InfoContainer>
                                        <Row>
                                            <Col md={3} lg={2}><InfoKey>Hobbies  :</InfoKey></Col>
                                            <Col md={9} lg={10}><InfoValue>{user?.hobbies}</InfoValue></Col>
                                        </Row>
                                    </InfoContainer>
                                </Col>
                            </Row>

                        </ProfileInfoContainer>
                    </Col>
                </Row>

            </ProfileContainer>
        </Container>
    );
}

const mapStateToProps = ({ user }: IAppState): IAppUserState => {
    return {
        user: user.user,
        isLoggedIn: user.isLoggedIn
    }
}

export default connect(mapStateToProps)(Profile);
// export default Profile;