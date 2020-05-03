import React from 'react';

export default class Note extends React.Component {
	render() {
		return (
			<div className='note'>
				<div className='btns'>
					<span>Select color: </span>
					<input
						type='button'
						style={{ backgroundColor: 'yellow' }}
						className='btn'
						onClick={() => this.props.def()}
					/>
					<input
						type='button'
						style={{ backgroundColor: '#f44336' }}
						className='btn'
						onClick={this.props.red}
					/>
					<input
						type='button'
						style={{ backgroundColor: '#4CAF50' }}
						className='btn'
						onClick={() => this.props.gre()}
					/>
					<input
						type='button'
						style={{ backgroundColor: '#2196F3' }}
						className='btn'
						onClick={this.props.blu}
					/>
				</div>
				<div className='content'>
					<input type='text' className='note-title' placeholder='Title' />
					<textarea className='note-content' placeholder='This is a new note' />
				</div>
				<div
					className='cut'
					onMouseEnter={() => this.props.shw()}
					onMouseLeave={this.props.hid}
				></div>
				<div className='show'>Excluir nota</div>
			</div>
		);
	}
}
