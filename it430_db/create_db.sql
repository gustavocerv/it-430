CREATE DATABASE anchor_point;

create user anchorpointapiuser with password 'AnchorPointApiUserPass' SUPERUSER;
grant all privileges on database anchor_point to anchorpointapiuser;