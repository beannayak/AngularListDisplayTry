package com.rasal.dao;

import java.util.ArrayList;
import java.util.List;

import com.rasal.domain.Song;

public class SongsDAO {
	public static List<Song> getListOfSongs() {
		List<Song> songs = new ArrayList<>();
		songs.add(new Song("weekend", "Starboy", "Weekend", "The Night"));
		songs.add(new Song("weekend", "Starboy", "Weekend", "The Night"));
		songs.add(new Song("weekend", "Starboy", "Weekend", "The Night"));
		songs.add(new Song("weekend", "Starboy", "Weekend", "The Night"));
		
		return songs;
	}
}
