USE [master]
GO
/****** Object:  Database [Tp-Personajes]    Script Date: 5/7/2023 23:40:06 ******/
CREATE DATABASE [Tp-Personajes]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Tp-Personajes', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Tp-Personajes.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Tp-Personajes_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Tp-Personajes_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Tp-Personajes] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Tp-Personajes].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Tp-Personajes] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Tp-Personajes] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Tp-Personajes] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Tp-Personajes] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Tp-Personajes] SET ARITHABORT OFF 
GO
ALTER DATABASE [Tp-Personajes] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Tp-Personajes] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Tp-Personajes] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Tp-Personajes] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Tp-Personajes] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Tp-Personajes] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Tp-Personajes] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Tp-Personajes] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Tp-Personajes] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Tp-Personajes] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Tp-Personajes] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Tp-Personajes] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Tp-Personajes] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Tp-Personajes] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Tp-Personajes] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Tp-Personajes] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Tp-Personajes] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Tp-Personajes] SET RECOVERY FULL 
GO
ALTER DATABASE [Tp-Personajes] SET  MULTI_USER 
GO
ALTER DATABASE [Tp-Personajes] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Tp-Personajes] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Tp-Personajes] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Tp-Personajes] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Tp-Personajes] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Tp-Personajes] SET QUERY_STORE = OFF
GO
USE [Tp-Personajes]
GO
/****** Object:  Table [dbo].[PeliculaSerie]    Script Date: 5/7/2023 23:40:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PeliculaSerie](
	[IdPeliculaSerie] [int] NOT NULL,
	[Imagen] [varchar](1000) NOT NULL,
	[Titulo] [varchar](50) NOT NULL,
	[FechaCreacion] [date] NOT NULL,
	[Calificacion] [int] NOT NULL,
	[PersonajesAsociados] [varchar](50) NOT NULL,
 CONSTRAINT [PK_PeliSerie] PRIMARY KEY CLUSTERED 
(
	[IdPeliculaSerie] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PeliculaxPersonaje]    Script Date: 5/7/2023 23:40:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PeliculaxPersonaje](
	[IdPersonaje] [int] NOT NULL,
	[IdPeliculaSerie] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje]    Script Date: 5/7/2023 23:40:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje](
	[IdPersonaje] [int] NOT NULL,
	[Imagen] [varchar](1000) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Edad] [int] NOT NULL,
	[Peso] [float] NOT NULL,
	[Historia] [varchar](50) NOT NULL,
	[IdPeliculaSerie] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Personaje] PRIMARY KEY CLUSTERED 
(
	[IdPersonaje] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[PeliculaSerie] ([IdPeliculaSerie], [Imagen], [Titulo], [FechaCreacion], [Calificacion], [PersonajesAsociados]) VALUES (1, N'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg', N'Breaking Bad', CAST(N'2006-01-01' AS Date), 2, N'1')
INSERT [dbo].[PeliculaSerie] ([IdPeliculaSerie], [Imagen], [Titulo], [FechaCreacion], [Calificacion], [PersonajesAsociados]) VALUES (2, N'https://play-lh.googleusercontent.com/iP2xCnSnKiek5Gk6lzwSjX7E7ro996ISWLfv3xFunxzYs1hnVIrWhzDY3yTH85m94hsH=w240-h480-rw', N'Ralph el demoledor', CAST(N'2015-01-01' AS Date), 4, N'2')
INSERT [dbo].[PeliculaSerie] ([IdPeliculaSerie], [Imagen], [Titulo], [FechaCreacion], [Calificacion], [PersonajesAsociados]) VALUES (3, N'https://pics.filmaffinity.com/Las_chicas_Gilmore_Serie_de_TV-418101648-large.jpg', N'Gilmore girls', CAST(N'2006-01-01' AS Date), 10, N'5')
INSERT [dbo].[PeliculaSerie] ([IdPeliculaSerie], [Imagen], [Titulo], [FechaCreacion], [Calificacion], [PersonajesAsociados]) VALUES (4, N'https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450', N'Zootopia', CAST(N'2016-03-20' AS Date), 7, N'3')
INSERT [dbo].[PeliculaSerie] ([IdPeliculaSerie], [Imagen], [Titulo], [FechaCreacion], [Calificacion], [PersonajesAsociados]) VALUES (5, N'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/03/jorobado-notre-dame-1901331.jpg?itok=HwD3NUVX', N'El jorobado de notre dame', CAST(N'2006-02-20' AS Date), 5, N'4')
GO
INSERT [dbo].[PeliculaxPersonaje] ([IdPersonaje], [IdPeliculaSerie]) VALUES (1, 1)
INSERT [dbo].[PeliculaxPersonaje] ([IdPersonaje], [IdPeliculaSerie]) VALUES (2, 2)
INSERT [dbo].[PeliculaxPersonaje] ([IdPersonaje], [IdPeliculaSerie]) VALUES (3, 5)
INSERT [dbo].[PeliculaxPersonaje] ([IdPersonaje], [IdPeliculaSerie]) VALUES (4, 3)
INSERT [dbo].[PeliculaxPersonaje] ([IdPersonaje], [IdPeliculaSerie]) VALUES (5, 4)
GO
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia], [IdPeliculaSerie]) VALUES (1, N'https://static.wikia.nocookie.net/breakingbad/images/5/52/BB_S5A_Jesse_Pinkman.png/revision/latest?cb=20221026171345&path-prefix=es', N'Jesse', 38, 80, N'Drogaadicto', N'breaking bad')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia], [IdPeliculaSerie]) VALUES (2, N'https://i.pinimg.com/736x/c8/3b/85/c83b854e0f82503daa5295523e09d160.jpg', N'Penelope', 12, 47, N'Bulling', N'Ralph el demoledor')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia], [IdPeliculaSerie]) VALUES (3, N'https://elvertederodeideas.files.wordpress.com/2017/11/nick_wilde_zootopia.png?w=640', N'Nick', 22, 60, N'Policia', N'Zootopia')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia], [IdPeliculaSerie]) VALUES (4, N'https://uvn-brightspot.s3.amazonaws.com/assets/vixes/e/el-jorobado-de-notre-dame-disney-1996-10.jpg', N'quasimodo', 30, 90, N'pobrecito esta chueco', N'El jorobado de notre dame')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia], [IdPeliculaSerie]) VALUES (5, N'https://upload.wikimedia.org/wikipedia/en/8/8f/Rory_Gilmore_season_1.jpg', N'Rory', 18, 49, N'Rory', N'Gilmore girls')
INSERT [dbo].[Personaje] ([IdPersonaje], [Imagen], [Nombre], [Edad], [Peso], [Historia], [IdPeliculaSerie]) VALUES (6, N'https://upload.wikimedia.org/wikipedia/en/8/8f/Rory_Gilmore_season_1.jpg', N'Rory', 18, 49, N'Rory', N'Gilmore girls')
GO
ALTER TABLE [dbo].[PeliculaxPersonaje]  WITH CHECK ADD  CONSTRAINT [FK_PeliculaxPersonaje_PeliculaSerie] FOREIGN KEY([IdPeliculaSerie])
REFERENCES [dbo].[PeliculaSerie] ([IdPeliculaSerie])
GO
ALTER TABLE [dbo].[PeliculaxPersonaje] CHECK CONSTRAINT [FK_PeliculaxPersonaje_PeliculaSerie]
GO
ALTER TABLE [dbo].[PeliculaxPersonaje]  WITH CHECK ADD  CONSTRAINT [FK_PeliculaxPersonaje_Personaje] FOREIGN KEY([IdPersonaje])
REFERENCES [dbo].[Personaje] ([IdPersonaje])
GO
ALTER TABLE [dbo].[PeliculaxPersonaje] CHECK CONSTRAINT [FK_PeliculaxPersonaje_Personaje]
GO
USE [master]
GO
ALTER DATABASE [Tp-Personajes] SET  READ_WRITE 
GO
