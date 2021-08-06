import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import {Note} from './../../Note';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  title!: string;
  text!: string;
  @Input() note!: Note;
  @Output() onAddNote: EventEmitter<Note> = new EventEmitter();

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.title) {
      alert("please add title");
      return
    }

    if(!this.text) {
      alert("please add text");
      return
    }

    const newNote = {
      title: this.title,
      text: this.text
    };

    this.onAddNote.emit(newNote);

    this.title = '';
    this.text = '';
  }

}
