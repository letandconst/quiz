import Box from '@mui/material/Box';
import Tags from '@/components/Tags';
import styled from '@emotion/styled';
import PostItem from '@/components/PostList/PostItem';
import UserDetails from '@/components/UserDetails';

const TagWrapper = styled.div`
	display: flex;
	gap: 4px;
`;

const postItemData = {
	title: 'Help with Java Functions',
	post: "I wanted to take a moment to recognize your outstanding work on the recent [project name] project. Your designs were creative, innovative, and visually stunning. They really helped to bring the project to life. I'm also impressed with your attention to detail and your willingness to go the extra mile. You always met deadlines, even when things got hectic.",
	created_by: 'John Doe',
	created_date: 'July 7,2023',
	tags: ['Html', 'CSS'],
};

export default function ComponentLibrary() {
	return (
		<Box
			sx={{
				backgroundColor: 'rgba(12, 14, 19, 1)',
				padding: '32px',
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
			}}
		>
			<TagWrapper>
				<Tags name='All' />
				<Tags name='Frontend' />
				<Tags name='Backend' />
			</TagWrapper>
			<PostItem data={postItemData} />
			<UserDetails />
		</Box>
	);
}