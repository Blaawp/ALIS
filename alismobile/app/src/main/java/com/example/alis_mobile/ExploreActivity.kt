package com.example.alis_mobile

import android.content.Intent
import android.os.Bundle
import android.widget.ImageView
import androidx.activity.ComponentActivity
import android.graphics.Color

class ExploreActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.cataloging_screen_home)

        val homeNav: ImageView = findViewById(R.id.homeNav)
        val compassNav: ImageView = findViewById(R.id.compassNav)
        val profNav: ImageView = findViewById(R.id.profNav)
        val searchNav: ImageView = findViewById(R.id.searchBtn)

        compassNav.setColorFilter(Color.WHITE)

        homeNav.setOnClickListener {
            // Handle homeNav click event
            // Example: Opening HomeActivity
            val intent = Intent(this, RuleActivity::class.java)
            startActivity(intent)
        }

        compassNav.setOnClickListener {
            // Handle compassNav click event
            // Example: Opening CompassActivity
            val intent = Intent(this, ExploreActivity::class.java)
            startActivity(intent)
        }

        profNav.setOnClickListener {
            // Handle profNav click event
            // Example: Opening ProfileActivity
            val intent = Intent(this, ProfileActivity::class.java)
            startActivity(intent)
        }
        searchNav.setOnClickListener {
            // Handle profNav click event
            // Example: Opening ProfileActivity
            val intent = Intent(this, SearchActivity::class.java)
            startActivity(intent)
        }
    }
}