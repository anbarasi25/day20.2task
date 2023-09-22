
        // JavaScript functions for fetching data from Instatus API
        function fetchData() {
            // Make API request here to fetch data from Instatus API
            // Store the result in a variable 'statuses'
            var statuses = [
                { title: 'Service 1', description: 'Status: Operational' },
                { title: 'Service 2', description: 'Status: Degraded Performance' },
                { title: 'Service 3', description: 'Status: Partial Outage' },
                { title: 'Service 4', description: 'Status: Major Outage' }
            ];
            
            displayData(statuses);
        }
        
        function displayData(statuses) {
            var statusContainer = document.getElementById('status-container');
            
            for (var i = 0; i < statuses.length; i++) {
                var statusCard = document.createElement('div');
                statusCard.classList.add('status-card');
                
                var title = document.createElement('div');
                title.classList.add('title');
                title.innerHTML = statuses[i].title;
                statusCard.appendChild(title);
                
                var description = document.createElement('div');
                description.classList.add('description');
                description.innerHTML = statuses[i].description;
                statusCard.appendChild(description);
                
                statusContainer.appendChild(statusCard);
            }
        }
        
        // Fetch data on page load
        window.onload = fetchData;