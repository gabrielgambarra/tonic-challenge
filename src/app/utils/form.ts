import { Directive, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive()
export class Form<TModel> implements OnInit {
  @ViewChild('form', { static: true }) formulario!: NgForm;

  emailPattern =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  obj!: TModel;

  constructor(public modelType: new () => TModel) {}

  ngOnInit() {
    this.startForm();
    this.setFormActions();
  }

  setFormActions(): void {
    this.formulario.ngSubmit.subscribe(() => {
      this.formulario.valid && this.submitForm();
    });
  }

  getNew(): TModel {
    return new this.modelType();
  }

  startForm() {
    this.obj = this.getNew();
  }

  submitForm() {}
}
