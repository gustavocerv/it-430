-- family table
INSERT INTO
    family(family_id,family_name)
VALUES
    (1, 'Smith Family'),
    (2, 'Johnson Family'),
    (3, 'Williams Family');
ALTER SEQUENCE family_family_id_seq RESTART WITH 4;

-- goal_type table
INSERT INTO
    goal_type(goal_type_id, goal_type_description)
VALUES
    (1, 'Family'),
    (2, 'Personal');
ALTER SEQUENCE goal_type_goal_type_id_seq RESTART WITH 3;

-- customer table
INSERT INTO
    customer(customer_id, first_name, last_name, username, email, passhash, created_on, is_active, last_login, family_id)
VALUES
    (1, 'John', 'Smith', 'jsmith', 'jsmith@email.com', '$2b$12$E3q3hCVEU7Fh0eoqVOV95eNtUt4AEebEqYRJktFoKWhyKqjs4MVLO', CURRENT_TIMESTAMP, true, NULL, 1),
    (2, 'Tom', 'Smith', 'tsmith', 'tsmith@email.com', '$2b$12$8rgCBoKv3EK5Vgym2StJK.1gdIOiZdUiItiCcgiNzYLh6qGzPgANS', CURRENT_TIMESTAMP, true, NULL, 1),
    (3, 'Susan', 'Smith', 'ssmith', 'ssmith@email.com', '$2b$12$feGbDrU2yVC72162VZJ1SONsrNib/.lgTxZiM1x9MJ3txQJsh/0m.', CURRENT_TIMESTAMP, true, NULL, 1),
    (4, 'Jane', 'Johnson', 'jjohnson', 'jjohnson@email.com', '$2b$12$XyM6VmpU6amBWMXcHLe2aOUGzyh8z5Z5NPFymTq1T/Z3OV.vQFU3O', CURRENT_TIMESTAMP, true, NULL, 2),
    (5, 'Timmy', 'Johnson', 'tjohnson', 'tjohnson@email.com', '$2b$12$0V.VPVGHsICX9ZvrAdBeI.nc3DUs.906hAQJwf3sLwcYAjdn49RBi', CURRENT_TIMESTAMP, true, NULL, 2),
    (6, 'George', 'Johnson', 'gjohnson', 'gjohnson@email.com', '$2b$12$GC6q1WigKjtTMoBzsXeVTOtGKnPFjqRCq2wqGeCAMz0lWYRzlGkni', CURRENT_TIMESTAMP, true, NULL, 2),
    (7, 'Asher', 'Johnson', 'ajohnson', 'ajohnson@email.com', '$2b$12$UEFI7mMecoWZTi2zDGBQyOK0FzDDTW.bbrL3DgLfwEbe4DKPaz0..', CURRENT_TIMESTAMP, true, NULL, 2),
    (8, 'Alice', 'Williams', 'awilliams', 'awilliams@email.com', '$2b$12$h/FGhWSkg1t3WtqISX9eceFrZPZNJHAYwpdr7FdsQ6jmuYNAT2mgm', CURRENT_TIMESTAMP, true, NULL, 3),
    (9, 'Ken', 'Williams', 'kwilliams', 'kwilliams@email.com', '$2b$12$u0YfdmP.AgFuGQzOw9k9QOHB/PwrOKxeDzf3SuckJ9Vx5XEIi.U2i', CURRENT_TIMESTAMP, true, NULL, 3),
    (10, 'Mark', 'Williams', 'mwilliams', 'mwilliams@email.com', '$2b$12$/e/lqiixkoUgVeHdE9tqcesbGXPdRxs6wbvYIsXNKDMaECuHDAtwK', CURRENT_TIMESTAMP, true, NULL, 3),
    (11, 'Oswald', 'Williams', 'owilliams', 'owilliams@email.com', '$2b$12$pAOUDVuCOxN.NyLqomSWue7ddJ.H4rqOysFXzfuYOokf1.TO5dqJW', CURRENT_TIMESTAMP, true, NULL, 3),
    (12, 'Jacob', 'Williams', 'jwilliams', 'jwilliams@email.com', '$2b$12$xcDvC0kbDo94GTL.YW.5HOQyQYK6xyOi.Xbgpz1QZaDLdOJJxm2KO', CURRENT_TIMESTAMP, true, NULL, 3);
>>>>>>> d0cffbefe7158e7b29e96b48f8d2fe45fb1a887e
ALTER SEQUENCE customer_customer_id_seq RESTART WITH 13;

-- goal table
INSERT INTO
    goal(goal_id, goal_description, is_active, created_date, goal_type_id, family_id, created_by)
VALUES
    (1, 'Limit Screentime', true, CURRENT_TIMESTAMP, 1, 1, 1),
    (2, 'Daily Scripture Study', true, CURRENT_TIMESTAMP, 1, 1, 2),
    (3, 'Daily Family Prayer', true, CURRENT_TIMESTAMP, 1, 1, 3),
    (4, 'Eat Together as a Family Daily', true, CURRENT_TIMESTAMP, 1, 2, 4),
    (5, 'Serve the Community Together Each Month', true, CURRENT_TIMESTAMP, 1, 2, 5),
    (6, 'Have Weekly Family Home Evening', true, CURRENT_TIMESTAMP, 1, 2, 6),
    (7, 'Eat At Home Together 3 Times per Week', true, CURRENT_TIMESTAMP, 1, 3, 8),
    (8, 'Clean the House Weekly', true, CURRENT_TIMESTAMP, 1, 3, 9),
    (9, 'Morning and Night Family Prayer', true, CURRENT_TIMESTAMP, 1, 3, 10);
ALTER SEQUENCE goal_goal_id_seq RESTART WITH 10;

-- task table
INSERT INTO
    task(task_id, task_description, is_active, is_completed, due_date, completion_date, created_date, family_id, created_by, assigned_to)
VALUES
    (1, 'No Screentime', true, false, '2025-10-31 23:59:59', NULL, CURRENT_TIMESTAMP, 1, 1, 1),
    (2, 'Read Scriptures for 30 Minutes', true, false, '2025-10-15 23:59:59', NULL, CURRENT_TIMESTAMP, 1, 2, 1),
    (3, 'Clean Room', true, false, '2025-10-10 23:59:59', NULL, CURRENT_TIMESTAMP, 1, 3, 2),
    (4, 'Mow the Lawn', true, false, '2025-10-5 19:00:00', NULL, CURRENT_TIMESTAMP, 2, 4, 4),
    (5, 'Volunteer at Local Shelter', true, false, '2025-10-25 23:59:59', NULL, CURRENT_TIMESTAMP, 2, 5, 5),
    (6, 'Make Dessert', true, false, '2025-10-15 19:00:00', NULL, CURRENT_TIMESTAMP, 2, 6, 4),
    (7, 'Wash the Car', true, false, '2025-10-20 18:00:00', NULL, CURRENT_TIMESTAMP, 3, 8, 8),
    (8, 'Clean Living Room', true,false,'2025-10-20 09:00:00',NULL,CURRENT_TIMESTAMP ,3 ,9, 8),
    (9, 'Do the Dishes',true,false,'2025-10-9 20:00:00',NULL,CURRENT_TIMESTAMP ,3 ,10, 10);
ALTER SEQUENCE task_task_id_seq RESTART WITH 10;

-- priority table
INSERT INTO
    priority(priority_id, priority_description, weight, is_active, family_id, created_by)
VALUES
    (1, 'Family', 1, true, 1, 1),
    (2, 'Job', 2, true, 1, 2),
    (3, 'Fun', 3, true, 1, 3),
    (4, 'Responsibilities', 1, true, 2, 4),
    (5, 'Spend Time with Family', 2, true, 2, 5),
    (6, 'Relax', 3, true, 2, 6),
    (7, 'Exercise', 1, true, 3, 8),
    (8, 'Eat Well', 2, true, 3, 9),
    (9, 'Serve Community', 3, true, 3, 10);
ALTER SEQUENCE priority_priority_id_seq RESTART WITH 10;

-- activity table
INSERT INTO
    activity(activity_id, activity_description, is_active, created_date, from_date, to_date, family_id, created_by)
VALUES
    (1, 'Family Game Night', true, CURRENT_TIMESTAMP, '2025-10-01 18:00:00', '2025-10-01 21:00:00', 1, 1),
    (2, 'Weekly Family Dinner', true, CURRENT_TIMESTAMP, '2025-10-02 19:00:00', '2025-10-02 21:00:00', 1, 2),
    (3, 'Monthly Family Outing', true, CURRENT_TIMESTAMP, '2025-10-15 10:00:00', '2025-10-15 16:00:00', 1, 3),
    (4, 'Community Service Day', true, CURRENT_TIMESTAMP, '2025-10-20 09:00:00', '2025-10-20 17:00:00', 2, 4),
    (5, 'Family Movie Night', true, CURRENT_TIMESTAMP, '2025-10-25 19:00:00', '2025-10-25 22:00:00', 2, 5),
    (6, 'Outdoor Picnic', true, CURRENT_TIMESTAMP, '2025-10-30 12:00:00', '2025-10-30 15:00:00', 2, 6),
    (7, 'Weekly Exercise Session', true, CURRENT_TIMESTAMP, '2025-10-05 07:00:00', '2025-10-05 08:30:00', 3, 8),
    (8, 'Healthy Cooking Class', true, CURRENT_TIMESTAMP, '2025-10-12 18:30:00', '2025-10-12 20:30:00', 3, 9),
    (9, 'Volunteer at Local Park Cleanup', true, CURRENT_TIMESTAMP, '2025-10-19 08:30:00', '2025-10-19 12:30:00', 3, 10);
ALTER SEQUENCE activity_activity_id_seq RESTART WITH 10;