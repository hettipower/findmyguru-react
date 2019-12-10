import React from 'react';

import './guru-sidebar-navi.styles.scss';

const GuruSidebarNavi = ({ profilePicUrl , guruName }) => (
    <div className="guruSidebar">
        <div className="guruProfile d-flex justify-content-between align-items-center">
            <div className="guruImage" style={{ backgroundImage : `url(${profilePicUrl})` }}></div>
            <h3 className="guruName">Guru {guruName}</h3>
        </div>

        {/* <div class="list-group">
            <div class="listParantWrap openSlideItem">
                <a href="#" class="listParentItem hasChild"><i class="fas fa-users"></i> Classes</a>
                <div class="listChildWrap">
                    <a href="https://mayaprojects.net/findmyguru/guru-account" class="list-group-item list-group-item-action active"> My Classes</a>
                    <a href="https://mayaprojects.net/findmyguru/guru-account/post-new-class" class="list-group-item list-group-item-action"> Post a new class</a>
                </div>
            </div>
            <div class="listParantWrap">
                <a href="#" class="listParentItem hasChild"><i class="fab fa-youtube"></i> Tutorials</a>
                <div class="listChildWrap">								
                    <a href="https://mayaprojects.net/findmyguru/guru-account/tutorial-videos" class="list-group-item list-group-item-action">My tutorials</a>
                    <a href="https://mayaprojects.net/findmyguru/guru-account/introduction-video" class="list-group-item list-group-item-action">Add new Introduction video</a>
                    <a href="https://mayaprojects.net/findmyguru/guru-account/tutorial-video" class="list-group-item list-group-item-action">Add new tutorial video</a>
                </div>
            </div>
            <div class="listParantWrap">
                <a href="#" class="listParentItem hasChild"><i class="fas fa-user-edit"></i> Update details</a>
                <div class="listChildWrap">
                    <a href="https://mayaprojects.net/findmyguru/guru-account/personal-details" class="list-group-item list-group-item-action">Update Personal Details</a>
                    <a href="https://mayaprojects.net/findmyguru/guru-account/personal-details-approval" class="list-group-item list-group-item-action">Update Career Details (Approval Required)</a>
                    <a href="https://mayaprojects.net/findmyguru/guru-account/edit-account" class="list-group-item list-group-item-action">Change Password</a>
                    <a href="https://mayaprojects.net/findmyguru/guru-account/deactivate-guru" class="list-group-item list-group-item-action"> Deactivate Guru Profile</a>
                </div>
            </div>
            <div class="listParantWrap">
                <a href="#" class="listParentItem hasChild"><i class="fas fa-user-cog"></i> Payments</a>
                <div class="listChildWrap">
                    <a href="https://mayaprojects.net/findmyguru/guru-account/package-selection" class="list-group-item list-group-item-action">Package Selection</a>
                </div>
            </div>
            <div class="listParantWrap">
                <a href="https://mayaprojects.net/findmyguru/wp-login.php?action=logout&amp;redirect_to=https%3A%2F%2Fmayaprojects.net%2Ffindmyguru%2Flogin&amp;_wpnonce=4efb29761b" class="list-group-item list-group-item-action listParentItem"><i class="fas fa-sign-out-alt"></i> Logout</a>
            </div>					
        </div> */}
    </div>
);

export default GuruSidebarNavi;