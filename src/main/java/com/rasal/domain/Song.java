package com.rasal.domain;

public class Song {
	private String albumArt;
	private String songName;
	private String artistName;
	private String albumName;

	public Song(String albumArt, String songName, String artistName, String albumName) {
		this.albumArt = albumArt;
		this.songName = songName;
		this.artistName = artistName;
		this.albumName = albumName;
	}

	public String getAlbumArt() {
		return albumArt;
	}

	public void setAlbumArt(String albumArt) {
		this.albumArt = albumArt;
	}

	public String getSongName() {
		return songName;
	}

	public void setSongName(String songName) {
		this.songName = songName;
	}

	public String getArtistName() {
		return artistName;
	}

	public void setArtistName(String artistName) {
		this.artistName = artistName;
	}

	public String getAlbumName() {
		return albumName;
	}

	public void setAlbumName(String albumName) {
		this.albumName = albumName;
	}
}
