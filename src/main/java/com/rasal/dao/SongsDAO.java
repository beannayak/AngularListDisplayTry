package com.rasal.dao;

import java.util.ArrayList;
import java.util.List;

import com.rasal.domain.Song;

public class SongsDAO {
	public static List<Song> getListOfSongs() {
		List<Song> songs = new ArrayList<>();
		songs.add(new Song("the_weekend", "Starboy", "The Weekend", "Starboy"));
		songs.add(new Song("chainsmokers", "Closer", "The Chainsmokers", "Collage"));
		songs.add(new Song("jolene", "Jolene", "Miley Cirus", "Unknown"));
		songs.add(new Song("elastic_heart", "Elastic Heart", "Sia", "The Hunger Games: catching fire"));
		
		return songs;
	}
}
