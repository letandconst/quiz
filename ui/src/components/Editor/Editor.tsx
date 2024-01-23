//@ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

import Button from '../Button/Button';
const Editor = () => {
	const [isEditorEmpty, setIsEditorEmpty] = useState(true);
	const editorRef = useRef(null);

	const initializeEditor = async () => {
		const EditorJS = (await import('@editorjs/editorjs')).default;
		const Header = (await import('@editorjs/header')).default;
		const Paragraph = (await import('@editorjs/paragraph')).default;
		const List = (await import('@editorjs/list')).default;
		const Code = (await import('@editorjs/code')).default;
		const InlineCode = (await import('@editorjs/inline-code')).default;
		const Quote = (await import('@editorjs/quote')).default;
		const Checklist = (await import('@editorjs/checklist')).default;
		const Warning = (await import('@editorjs/warning')).default;
		const TextVariantTune = (await import('@editorjs/text-variant-tune')).default;
		const Underline = (await import('@editorjs/underline')).default;
		const ImageTool = (await import('@editorjs/image')).default;
		const Marker = (await import('@editorjs/marker')).default;
		const DragDrop = (await import('editorjs-drag-drop')).default;
		const CodeBox = (await import('@bomdi/codebox')).default;
		const Table = (await import('@editorjs/table')).default;
		const AttachesTool = (await import('@editorjs/attaches')).default;
		const Delimiter = (await import('@editorjs/delimiter')).default;

		const editor = new EditorJS({
			placeholder: 'Untitled',
			holder: 'editor-js',
			inlineToolbar: true,
			tools: {
				header: {
					class: Header,
				},
				paragraph: {
					class: Paragraph,
					inlineToolbar: true,
				},
				list: {
					class: List,
					inlineToolbar: true,
					config: {
						defaultStyle: 'unordered',
					},
				},
				code: {
					class: Code,
				},
				inlineCode: {
					class: InlineCode,
					inlineToolbar: true,
				},
				quote: {
					class: Quote,
					inlineToolbar: true,
					config: {
						quotePlaceholder: 'Enter a quote',
						captionPlaceholder: "Quote's author",
					},
				},
				checklist: {
					class: Checklist,
					inlineToolbar: true,
				},
				textVariant: TextVariantTune,
				underline: Underline,
				warning: {
					class: Warning,
					inlineToolbar: true,
					config: {
						titlePlaceholder: 'Title',
						messagePlaceholder: 'Message',
					},
				},
				image: {
					class: ImageTool,
				},
				delimiter: Delimiter,
				AttachesTool: {
					class: AttachesTool,
				},
				marker: Marker,
				table: Table,
			},
			data: {
				blocks: [
					{
						type: 'paragraph',
						data: {
							text: '',
						},
					},
				],
			},

			tunes: ['textVariant'],
			onChange: () => {
				editor.save().then((outputData) => {
					console.log('blocks', outputData.blocks.length);
					const isEmpty = outputData.blocks.length === 0;
					setIsEditorEmpty(isEmpty);
				});
			},
			onReady: () => {
				new DragDrop(editor);
				console.log('editor ready');
			},
		});

		editorRef.current = editor;
	};

	useEffect(() => {
		console.log('Editor mounted');
		initializeEditor();
		return () => {
			console.log('Editor unmounted');
			if (editorRef.current) {
				console.log('editor', editorRef);
				editorRef.current.destroy();
			}
		};
	}, []);

	return (
		<>
			<Box
				id='editor-js'
				sx={{
					color: '#ffffff',
					'.tc-wrap': {
						'--color-border': '#2C313C',
					},
					'.cdx-input': {
						border: '1px solid #40444C',
						boxShadow: 'none',
					},
					'.tc-cell': {
						borderRight: '1px solid #2C313C',
					},
					'.tc-row': {
						borderBottom: '1px solid #2C313C',
					},
					'.tc-add-column, .tc-table': {
						borderTop: '1px solid #2C313C',
					},
					'.cdx-settings-button': {
						padding: '8px 0',
						minWidth: '20px',
						minHeight: '20px',
						svg: {
							fill: '#ffffff',
						},
					},
					'.ce-conversion-toolbar__label': {
						fontFamily: 'Figtree-Regular,sans-serif',
						fontWeight: '400',
					},
					'.ce-popover-item:hover:not(.ce-popover-item--no-hover), .ce-inline-toolbar__dropdown:hover': {
						backgroundColor: '#2C313C',
						borderRadius: '6px 0 0 6px',
					},
					'.cdx-warning:before': {
						backgroundImage:
							"url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='5' width='14' height='14' rx='4' stroke='white' stroke-width='2'/%3E%3Cline x1='12' y1='9' x2='12' y2='12' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M12 15.02V15.01' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A\")",
					},
					'.ce-toolbar__plus:hover , .ce-toolbar__settings-btn:hover': {
						background: '#2C313C',
						borderRadius: '6px',
					},
					'.ce-inline-tool:hover, .ce-conversion-tool:hover , .tc-row--selected, .tc-cell--selected': {
						background: '#2C313C',
					},
					'.ce-conversion-tool--focused, .ce-popover-item--active': {
						boxShadow: 'none',
						background: '#2C313C!important',
					},
					'.ce-block--selected .ce-block__content, .cdx-settings-button:hover': {
						background: 'transparent',
					},
					'.ce-paragraph[data-placeholder]:empty:before': {
						fontFamily: 'Figtree-Bold,sans-serif',
						fontSize: '32px',
						lineHeight: '1.5',
						fontWeight: '700',
					},
					'.tc-add-row:hover, .tc-add-row:hover:before, .tc-add-column:hover, .tc-popover': {
						background: '#2C313C',
					},
					'.ce-inline-toolbar, .tc-popover__item-icon': {
						background: 'transparent',
					},
					'.ce-popover--opened, .ce-conversion-toolbar': {
						padding: '4px 2px',
						background: '#16191F',
						borderRadius: '8px',
						border: 'none',
					},
					'.ce-popover__items': {
						display: 'flex',
						flexDirection: 'column',
						rowGap: '4px',
						margin: '8px 0',
						'&::-webkit-scrollbar': {
							width: '11px',
							background: '#2C313C',
						},
						'&::-webkit-scrollbar-track': {
							backgroundColor: '#2C313C',
						},
						'&::-webkit-scrollbar-thumb': {
							background: '#4F545F',
							borderRadius: '8px',
						},
					},
					'.ce-popover-item': {
						padding: '2px',
						color: '#ffffff',
					},
					'.ce-popover-item__title': {
						fontFamily: 'Figtree-Medium,sans-serif',
						fontWeight: '500',
						lineHeight: '16.8px',
						color: '#ffffff',
					},
					'.ce-popover-item__icon, .ce-conversion-tool__icon': {
						border: '1px solid #2C313C',
						borderRadius: '6px',
						boxShadow: 'none',
						background: '#16191F',
						width: '24px',
						height: '24px',
					},
					'.ce-toolbar__plus, .ce-toolbar__settings-btn, .cdx-search-field__icon, .cdx-search-field__icon svg, .ce-popover-item__icon svg': {
						width: '24px',
						height: '24px',
					},
					'.codex-editor path': {
						stroke: '#ffffff',
					},
					'.cdx-search-field': {
						background: '#2C313C',
						borderRadius: '6px',
						padding: '4px 0px 4px 4px',
						marginBottom: '0',
						border: 'none',
					},
					'.cdx-search-field__input': {
						fontFamily: 'Figtree-Medium, sans-serif',
						fontWeight: '500',
						fontSize: '14px',
						lineHeight: '16.8px',
						color: '#ffffff',
					},
					'.cdx-search-field__input::placeholder': {
						color: '#ffffff',
						opacity: '0.3',
					},
					'.cdx-search-field__icon svg, .tc-popover__item-label, .tc-add-column, .tc-add-row': {
						color: '#ffffff',
					},
					'.ce-popover__custom-content:not(:empty)': {
						margin: '0 6px 0',
						'div > .cdx-settings-button:not(:first-of-type)': {
							marginLeft: '8px',
						},
					},
					'.ce-toolbar': {
						left: '24px',
					},
					'.ce-toolbar__settings-btn': {
						marginLeft: '4px',
					},
					'.ce-toolbar__actions': {
						paddingRight: '8px',
					},
					'.ce-block__content': {
						fontFamily: 'Figtree-Bold,sans-serif',
						maxWidth: '630px',
						margin: '0 auto',
					},
					'.ce-code__textarea': {
						borderRadius: '8px',
						background: 'rgba(255, 255, 255, 0.08)',
						color: '#ffffff',
						border: 'none',
					},

					'@media (max-width: 650px)': {
						'.ce-toolbar__plus, .ce-toolbar__settings-btn': {
							backgroundColor: 'unset',
							border: 'none',
							boxShadow: 'none',
						},
						'.ce-toolbar': {
							left: '0',
						},
						'.ce-block__content': {
							maxWidth: '364px',
							margin: '0 0 0 auto',
						},
						'.cdx-block': {
							padding: '0',
						},
					},
				}}
			></Box>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid #2C313C' }}>
				<Button
					text='Post'
					width='max-content'
					padding='8px 20px'
					borderRadius='63px'
					lineHeight='19.2px'
					disabled={isEditorEmpty}
					action={() => console.log('create post')}
				/>
			</Box>
		</>
	);
};

export default Editor;
