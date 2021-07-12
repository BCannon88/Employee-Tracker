INSERT INTO department (name)
VALUES
  ('Administration'),
  ('Finance'),
  ('Human Resources'),
  ('Sales'),
  ('Technical Support'),
  ('Maintenance');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Director', 750000.00, 1),
  ('Deputy Director of Finance', 400000.00, 2),
  ('Deputy Director of Human Resources', 325000.00, 3),
  ('Deputy Director of Sales', 450000.00, 4),
  ('Deputy Director of Technical Support', 275000.00, 5),
  ('Deputy Director of Maintenance', 215000.00, 6),
  ('Head of Finance', 150000.00, 2),
  ('Head of Human Resources', 130000.00, 3),
  ('Head of Sales', 170000.00, 4),
  ('Head of Technical Support', 125000.00, 5),
  ('Head of Maintenance', 100000.00, 6);
  
  
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Shelton', 1, null),
  ('Betty', 'Smith', 2, 1),
  ('Gerald', 'Donnelly', 3, 1),
  ('Alex', 'Johnson', 4, 1),
  ('Camden', 'Blake', 5, 1),
  ('Howard', 'Stark', 6, 1),
  ('Jack', 'Rodgers', 7, 2),
  ('Steve', 'Banner', 8, 3),
  ('Lily', 'Potter', 9, 4),
  ('John', 'Baker', 10, 5),
  ('Mike', 'Deagner', 11, 6);



 