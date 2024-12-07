import React, { useEffect, useState } from 'react';
import './Profile.scss';
import Post from '../post/Post';
import userImg from '../../Assets/imgs/user.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CreatePost from '../CreatePost/CreatePost';
// import { getUserProfile } from '../../redux/slices/postsSlice';
import { getUserProfile } from '../../redux/slices/slices/postsSlice';

const Profile = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.postsReducer.userProfile);
    const myProfile = useSelector((state) => state.appConfig.myProfile);
    const [isMyProfile, setIsMyProfile] = useState(false);

    useEffect(() => {
        dispatch(
            getUserProfile({
                userId: params.id,
            })
        );
        setIsMyProfile(myProfile?._id === params.id);
    }, [myProfile]);

    return (
        <div className='Profile'>
            <div className='container'>
                <div className='left-part'>
                    <CreatePost />
                    {/* {userProfile?.posts?.map((post) => {
                        return <Post post={post} key={post?._id} />;
                    })} */}
                    <Post post={userProfile?.posts}/>
                </div>
                <div className='right-part'>
                    <div className='profile-card'>
                        <img
                            className='user-img'
                            src={userProfile?.avatar?.url || userImg}
                            alt=''
                        />
                        {/* <h3 className='username'>Priyanka All</h3> */}
                        <h3 className='username'>{userProfile?.name}</h3>
                        <div className='follower-info'>
                            <h4>{userProfile?.followers?.length} followers</h4>
                            <h4>{userProfile?.followings?.length} following</h4>
                        </div>

                        {!isMyProfile && (
                            <button className='follow btn-primary hover-link'>
                                Follow
                            </button>
                        )}

                        {!isMyProfile && (
                            <button
                                className='update-profile btn-secondary hover-link'
                                onClick={() => navigate('/updateProfile')}>
                                Update Profile
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
