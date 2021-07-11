INSERT INTO department (name)
VALUES
  ('Administration'),
  ('Finance'),
  ('Human Resources'),
  ('Sales'),
  ('Technical Support'),
  ('Maintenance');

INSERT INTO roles (title, salary, department_id)
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

-- SELECT e.id, e.first_name, e.last_name, d.name AS department, r.title, r.salary, CONCAT_WS(" ", m.first_name, m.last_name) AS manager FROM employee e LEFT JOIN employee m ON m.id = e.manager_id INNER JOIN role r ON e.role_id = r.id INNER JOIN department d ON r.department_id = d.id ORDER BY e.id ASC;

-- -- Query for view all roles --
-- SELECT  r.id, r.title, r.salary, d.name as Department_Name FROM role AS r INNER JOIN department AS d ON r.department_id = d.id;

-- --Query for getting employees --
-- SELECT id, CONCAT_WS(' ', first_name, last_name) AS Employee_Name FROM employee

-- -- Query for updating --
-- UPDATE employee SET role_id = 3 WHERE id = 8;
-- UPDATE employee SET ? WHERE ?;

-- -- Query for Delete --
-- DELETE FROM department WHERE id = 13;

 