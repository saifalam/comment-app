import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="JK Rawling" publish="Today at 6:00 PM" comment="Best book ever" />
            </ApprovalCard> 
            <ApprovalCard>
             <CommentDetail author="Gorge RR Martin" publish="Yesterday at 2:00 PM" comment="Best TV series based on this book" />
            </ApprovalCard> 
            <ApprovalCard>
                <CommentDetail author="Jonathan Trot"  publish="Last Year on 21 Feb at 10:00 AM" comment="Best Moral Stories ever"/>
            </ApprovalCard> 
        </div>
    );
}

export default App;