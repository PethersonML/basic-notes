import React, { useState } from 'react';

import './styles.css';

import Note from '../../components/Note';

import logoImg from '../../assets/logo.svg';

export default function Notes() {
	const [notes, setNotes] = useState([]);

	function showDiv() {
		var show = document.querySelector('.show');
		show.style.display = 'flex';
	}

	function hideDiv() {
		var show = document.querySelector('.show');
		show.style.display = 'none';
	}

	function newNote() {
		setNotes([
			{
				id: 1,
				color: 'yellow',
				tittle: 'Tittle',
				desc: 'Teste',
			},
		]);
		// var container = document.querySelector('.content-body');
		// var divNote = document.createElement('div');
		// var divBtns = document.createElement('div');
		// var divContent = document.createElement('div');
		// var divCut = document.createElement('div');
		// var divShow = document.createElement('div');
		// var span = document.createElement('span');
		// var textSpan = document.createTextNode('Select color:');
		// var btnYellow = document.createElement('input');
		// var btnRed = document.createElement('input');
		// var btnGreen = document.createElement('input');
		// var btnBlue = document.createElement('input');
		// btnYellow.setAttribute('type', 'button');
		// btnRed.setAttribute('type', 'button');
		// btnGreen.setAttribute('type', 'button');
		// btnBlue.setAttribute('type', 'button');
		// btnYellow.style.backgroundColor = 'yellow';
		// btnRed.style.backgroundColor = '#f44336';
		// btnGreen.style.backgroundColor = '#4CAF50';
		// btnBlue.style.backgroundColor = '#2196F3';
		// btnYellow.setAttribute('class', 'btn');
		// btnRed.setAttribute('class', 'btn');
		// btnGreen.setAttribute('class', 'btn');
		// btnBlue.setAttribute('class', 'btn');
		// btnYellow.onclick = defaultTheme;
		// btnRed.onclick = redTheme;
		// btnGreen.onclick = greenTheme;
		// btnBlue.onclick = blueTheme;
		// span.appendChild(textSpan);
		// divNote.setAttribute('class', 'note');
		// divBtns.setAttribute('class', 'btns');
		// divContent.setAttribute('class', 'content');
		// divCut.setAttribute('class', 'cut');
		// divShow.setAttribute('class', 'show');
		// divNote.appendChild(divShow);
		// divNote.appendChild(divCut);
		// divBtns.appendChild(span);
		// divBtns.appendChild(btnYellow);
		// divBtns.appendChild(btnRed);
		// divBtns.appendChild(btnGreen);
		// divBtns.appendChild(btnBlue);
		// divNote.appendChild(divBtns);
		// divNote.appendChild(divContent);
		// container.appendChild(divNote);
		// console.log(divNote);
	}

	function defaultTheme() {
		var theme = document.querySelector('.note');
		var cut = document.querySelector('.cut');

		theme.style.backgroundColor = 'yellow';
		cut.style.borderTopColor = '#919100';
		cut.style.borderRightColor = '#555500';

		console.log(notes);
	}

	function redTheme() {
		var theme = document.querySelector('.note');
		var cut = document.querySelector('.cut');

		theme.style.backgroundColor = '#f44336';
		cut.style.borderTopColor = '#b9342a';
		cut.style.borderRightColor = '#7c251e';
	}

	function greenTheme() {
		var theme = document.querySelector('.note');
		var cut = document.querySelector('.cut');

		theme.style.backgroundColor = '#4CAF50';
		cut.style.borderTopColor = '#38813b';
		cut.style.borderRightColor = '#255526';
	}

	function blueTheme() {
		var theme = document.querySelector('.note');
		var cut = document.querySelector('.cut');

		theme.style.backgroundColor = '#2196F3';
		cut.style.borderTopColor = '#1d7bc7';
		cut.style.borderRightColor = '#145183';
	}

	console.log(notes);
	console.log(typeof notes);

	return (
		<div className='notes-container'>
			<header>
				<img src={logoImg} alt='BasicNotes' />
			</header>

			<div className='content-header'>
				<input type='button' value='Create note' id='btn-create' onClick={newNote} />
			</div>

			<div className='content-body'>
				{notes.map((note) => (
					<Note
						id='1'
						def={defaultTheme}
						red={redTheme}
						gre={greenTheme}
						blu={blueTheme}
						shw={showDiv}
						hid={hideDiv}
					/>
				))}
			</div>
		</div>
	);
}
