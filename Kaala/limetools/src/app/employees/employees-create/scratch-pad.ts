 this.employeeForm = this.fb.group({
      emp_no: [''],
      first_name: ['', [Validators.minLength(3), Validators.maxLength(6)]],
      last_name: ['']
    });