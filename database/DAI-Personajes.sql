USE [master]
GO

IF NOT EXISTS (SELECT * FROM sys.server_principals WHERE [name] = N'alumno')
BEGIN
	PRINT 'Creando Login'
	CREATE LOGIN [alumno] WITH 
		PASSWORD = N'alumno', 
		DEFAULT_DATABASE = [Tp-Personajes], 
		CHECK_EXPIRATION = OFF, 
		CHECK_POLICY = OFF
END
GO

USE [Tp-Personajes]
IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE [name] = N'alumno')
BEGIN
	PRINT 'Creando User'
	CREATE USER [alumno] FOR LOGIN [alumno]
	ALTER ROLE [db_owner] ADD MEMBER [alumno]
END 
GO