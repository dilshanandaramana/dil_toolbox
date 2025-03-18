// Get all tab links
const tabLinks = document.querySelectorAll(".tab-link");

// Add event listeners to tab links
tabLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const tabId = this.getAttribute("data-tab");
        
        // Hide all tab content
        document.querySelectorAll(".tab-content").forEach(tab => {
            tab.classList.remove("active");
        });

        // Show the clicked tab content
        document.getElementById(tabId).classList.add("active");

        // Optionally, if you want to add an 'active' class to the clicked link
        tabLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});






// Event listener for Decimal input
document.getElementById("decimal").addEventListener("input", function() {
    let decimalValue = parseInt(this.value, 10);
    if (!isNaN(decimalValue)) {
        document.getElementById("hex").value = decimalValue.toString(16).toUpperCase();
        document.getElementById("octal").value = decimalValue.toString(8);
        document.getElementById("binary").value = decimalValue.toString(2);
    } else {
        resetFields();
    }
});

// Event listener for Hexadecimal input
document.getElementById("hex").addEventListener("input", function() {
    let hexValue = parseInt(this.value, 16);
    if (!isNaN(hexValue)) {
        document.getElementById("decimal").value = hexValue;
        document.getElementById("octal").value = hexValue.toString(8);
        document.getElementById("binary").value = hexValue.toString(2);
    } else {
        resetFields();
    }
});

// Event listener for Octal input
document.getElementById("octal").addEventListener("input", function() {
    let octalValue = parseInt(this.value, 8);
    if (!isNaN(octalValue)) {
        document.getElementById("decimal").value = octalValue;
        document.getElementById("hex").value = octalValue.toString(16).toUpperCase();
        document.getElementById("binary").value = octalValue.toString(2);
    } else {
        resetFields();
    }
});

// Event listener for Binary input
document.getElementById("binary").addEventListener("input", function() {
    let binaryValue = parseInt(this.value, 2);
    if (!isNaN(binaryValue)) {
        document.getElementById("decimal").value = binaryValue;
        document.getElementById("hex").value = binaryValue.toString(16).toUpperCase();
        document.getElementById("octal").value = binaryValue.toString(8);
    } else {
        resetFields();
    }
});

// Function to reset fields to default if input is invalid
function resetFields() {
    document.getElementById("decimal").value = "";
    document.getElementById("hex").value = "";
    document.getElementById("octal").value = "";
    document.getElementById("binary").value = "";
}

// Reset button functionality
document.getElementById("reset-btn").addEventListener("click", resetFields);



// Event listener for Hours input
document.getElementById("hours").addEventListener("input", function() {
    let hoursValue = parseFloat(this.value);
    if (!isNaN(hoursValue)) {
        document.getElementById("minutes").value = (hoursValue * 60).toFixed(2);
        document.getElementById("seconds").value = (hoursValue * 3600).toFixed(2);
        document.getElementById("milliseconds").value = (hoursValue * 3600000).toFixed(2);
    } else {
        resetTimeFields();
    }
});

// Event listener for Minutes input
document.getElementById("minutes").addEventListener("input", function() {
    let minutesValue = parseFloat(this.value);
    if (!isNaN(minutesValue)) {
        document.getElementById("hours").value = (minutesValue / 60).toFixed(2);
        document.getElementById("seconds").value = (minutesValue * 60).toFixed(2);
        document.getElementById("milliseconds").value = (minutesValue * 60000).toFixed(2);
    } else {
        resetTimeFields();
    }
});

// Event listener for Seconds input
document.getElementById("seconds").addEventListener("input", function() {
    let secondsValue = parseFloat(this.value);
    if (!isNaN(secondsValue)) {
        document.getElementById("hours").value = (secondsValue / 3600).toFixed(2);
        document.getElementById("minutes").value = (secondsValue / 60).toFixed(2);
        document.getElementById("milliseconds").value = (secondsValue * 1000).toFixed(2);
    } else {
        resetTimeFields();
    }
});

// Event listener for Milliseconds input
document.getElementById("milliseconds").addEventListener("input", function() {
    let millisecondsValue = parseFloat(this.value);
    if (!isNaN(millisecondsValue)) {
        document.getElementById("hours").value = (millisecondsValue / 3600000).toFixed(2);
        document.getElementById("minutes").value = (millisecondsValue / 60000).toFixed(2);
        document.getElementById("seconds").value = (millisecondsValue / 1000).toFixed(2);
    } else {
        resetTimeFields();
    }
});

// Function to reset fields
function resetTimeFields() {
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
    document.getElementById("milliseconds").value = "";
}

// Reset button functionality
document.getElementById("time-reset-btn").addEventListener("click", resetTimeFields);


// Event listener for String input
document.getElementById("input-string").addEventListener("input", function() {
    let inputValue = this.value;

    // Convert to uppercase
    document.getElementById("uppercase").value = inputValue.toUpperCase();

    // Convert to lowercase
    document.getElementById("lowercase").value = inputValue.toLowerCase();

    // Reverse the string
    document.getElementById("reverse").value = inputValue.split('').reverse().join('');

    // Calculate string length
    document.getElementById("length").value = inputValue.length;
});

// Reset button functionality for String Conversion
document.getElementById("reset-string-btn").addEventListener("click", function() {
    document.getElementById("input-string").value = "";
    document.getElementById("uppercase").value = "";
    document.getElementById("lowercase").value = "";
    document.getElementById("reverse").value = "";
    document.getElementById("length").value = "";
});


// Function to convert IP address to decimal, binary, and hexadecimal
function convertIp(ip) {
    let parts = ip.split('.').map(Number);
    if (parts.length === 4 && parts.every(part => part >= 0 && part <= 255)) {
        let decimalValue = parts.reduce((acc, part) => (acc << 8) + part, 0);
        let binaryValue = decimalValue.toString(2).padStart(32, '0');
        let hexValue = decimalValue.toString(16).toUpperCase().padStart(8, '0');

        document.getElementById("decimal-ip").value = decimalValue;
        document.getElementById("binary-ip").value = binaryValue.match(/.{1,8}/g).join('.');
        document.getElementById("hex-ip").value = hexValue.match(/.{1,2}/g).join(':');
    } else {
        resetNetworkFields();
    }
}

// Event listener for IP Address input
document.getElementById("ip-address").addEventListener("input", function() {
    let ipAddress = this.value;
    if (ipAddress) {
        convertIp(ipAddress);
    } else {
        resetNetworkFields();
    }
});

// Function to reset network fields
function resetNetworkFields() {
    document.getElementById("decimal-ip").value = "";
    document.getElementById("binary-ip").value = "";
    document.getElementById("hex-ip").value = "";
}

// Reset button functionality for Network Conversion
document.getElementById("reset-network-btn").addEventListener("click", function() {
    document.getElementById("ip-address").value = "";
    resetNetworkFields();
});


// Conversion rates
const conversions = {
    bps: 1,
    kbps: 1000,
    mbps: 1000000,
    gbps: 1000000000,
};

// Function to convert bandwidth value
function convertBandwidth(value, unit) {
    let bpsValue = value * conversions[unit];  // Convert input to bps

    let kbps = bpsValue / conversions.kbps;
    let mbps = bpsValue / conversions.mbps;
    let gbps = bpsValue / conversions.gbps;

    document.getElementById("kbps-output").value = kbps.toFixed(2);
    document.getElementById("mbps-output").value = mbps.toFixed(2);
    document.getElementById("gbps-output").value = gbps.toFixed(2);
}

// Event listener for bandwidth value input
document.getElementById("bandwidth-value").addEventListener("input", function() {
    let value = parseFloat(this.value);
    let unit = document.getElementById("bandwidth-unit").value;
    
    if (!isNaN(value)) {
        convertBandwidth(value, unit);
    } else {
        resetBandwidthFields();
    }
});

// Event listener for bandwidth unit change
document.getElementById("bandwidth-unit").addEventListener("change", function() {
    let value = parseFloat(document.getElementById("bandwidth-value").value);
    if (!isNaN(value)) {
        convertBandwidth(value, this.value);
    }
});

// Function to reset bandwidth fields
function resetBandwidthFields() {
    document.getElementById("kbps-output").value = "";
    document.getElementById("mbps-output").value = "";
    document.getElementById("gbps-output").value = "";
}

// Reset button functionality for Bandwidth Conversion
document.getElementById("reset-bandwidth-btn").addEventListener("click", function() {
    document.getElementById("bandwidth-value").value = "";
    resetBandwidthFields();
});


// Function to evaluate XPath expression
function evaluateXPath() {
    let xmlContent = document.getElementById("xml-content").value;
    let xpathExpression = document.getElementById("xpath-expression").value;
    let resultArea = document.getElementById("xpath-results");

    // Create a DOMParser to parse XML/HTML content
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlContent, "text/xml");

    // Evaluate the XPath expression
    try {
        let result = xmlDoc.evaluate(xpathExpression, xmlDoc, null, XPathResult.ANY_TYPE, null);
        let node, results = [];

        // Handle different result types (nodes, strings, numbers)
        switch (result.resultType) {
            case XPathResult.STRING_TYPE:
                results.push(result.stringValue);
                break;
            case XPathResult.NUMBER_TYPE:
                results.push(result.numberValue);
                break;
            case XPathResult.BOOLEAN_TYPE:
                results.push(result.booleanValue);
                break;
            case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
                while (node = result.iterateNext()) {
                    results.push(node.outerHTML || node.textContent);
                }
                break;
            default:
                results.push("No results found.");
        }

        resultArea.textContent = results.length ? results.join("\n") : "No matching nodes.";
    } catch (e) {
        resultArea.textContent = "Invalid XPath or XML content.";
    }
}

// Event listener for Evaluate XPath button
document.getElementById("evaluate-xpath-btn").addEventListener("click", evaluateXPath);

// Function to reset XPath fields
function resetXPathFields() {
    document.getElementById("xml-content").value = "";
    document.getElementById("xpath-expression").value = "";
    document.getElementById("xpath-results").textContent = "Results will appear here...";
}

// Reset button functionality for XPath
document.getElementById("reset-xpath-btn").addEventListener("click", resetXPathFields);





// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // First, let's create and add the necessary elements for mobile navigation
    const header = document.querySelector('header');
    
    // Create menu toggle button
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    header.appendChild(menuToggle);
    
    // Create side navigation
    const sidenav = document.createElement('div');
    sidenav.className = 'sidenav';
    sidenav.innerHTML = '<a href="javascript:void(0)" class="closebtn">&times;</a>';
    
    // Clone navigation links to sidenav
    const navLinks = document.querySelectorAll('.navbar li a');
    navLinks.forEach(link => {
        const clonedLink = link.cloneNode(true);
        sidenav.appendChild(clonedLink);
    });
    
    // Add sidenav to the body
    document.body.appendChild(sidenav);
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    // Toggle side navigation
    menuToggle.addEventListener('click', function() {
        sidenav.classList.add('open');
        overlay.classList.add('active');
        document.body.classList.add('sidenav-open');
    });
    
    // Close side navigation when clicking on close button
    const closeBtn = sidenav.querySelector('.closebtn');
    closeBtn.addEventListener('click', closeSidenav);
    
    // Close side navigation when clicking on overlay
    overlay.addEventListener('click', closeSidenav);
    
    // Close side navigation when clicking on a link
    const sidenavLinks = sidenav.querySelectorAll('a:not(.closebtn)');
    sidenavLinks.forEach(link => {
        link.addEventListener('click', closeSidenav);
    });
    
    function closeSidenav() {
        sidenav.classList.remove('open');
        overlay.classList.remove('active');
        document.body.classList.remove('sidenav-open');
    }
    
    // Close sidenav on window resize if screen becomes larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeSidenav();
        }
    });
});
