// Select elements
const eventContainer = document.getElementById("eventContainer");
const categoryFilter = document.getElementById("categoryFilter");
const dateFilter = document.getElementById("dateFilter");
const refreshBtn = document.getElementById("refreshBtn");

// Fetch event data
const fetchEvents = async () => {
  try {
    const response = await fetch("events.json");
    if (!response.ok) throw new Error("Failed to fetch events");
    return await response.json();
  } catch (error) {
    console.error("Error loading events:", error);
    return [];
  }
};

// Render cards
const renderEvents = (events) => {
  eventContainer.innerHTML = "";

  if (events.length === 0) {
    eventContainer.innerHTML = `
      <div class="text-center text-muted fs-5">
        ❌ No matching events found.
      </div>`;
    return;
  }

  events.forEach(({ title, category, date, image, description }) => {
    const card = document.createElement("div");
    card.className = "col-md-4";

    card.innerHTML = `
      <div class="card h-100 shadow border-0">
        <img src="${image}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text text-secondary"><strong>Category:</strong> ${category}</p>
          <p class="card-text text-secondary"><strong>Date:</strong> ${date}</p>
          <p class="card-text">${description}</p>
        </div>
      </div>
    `;
    eventContainer.appendChild(card);
  });
};

// Apply filters
const applyFilters = async () => {
  const events = await fetchEvents();
  const selectedCategory = categoryFilter.value;
  const selectedDate = dateFilter.value;

  const filtered = events.filter((e) => {
    const matchCategory =
      selectedCategory === "all" ||
      e.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchDate = !selectedDate || e.date === selectedDate;
    return matchCategory && matchDate;
  });

  renderEvents(filtered);
};

// Event listeners
categoryFilter.addEventListener("change", applyFilters);
dateFilter.addEventListener("change", applyFilters);
refreshBtn.addEventListener("click", () => {
  categoryFilter.value = "all";
  dateFilter.value = "";
  applyFilters();
});

// Initial load
applyFilters();
