//your JS code here. If required.
 function removeColor() {
            var selectElement = document.getElementById("colorSelect");
            var selectedIndex = selectElement.selectedIndex;

            if (selectedIndex !== -1) {
                selectElement.remove(selectedIndex);
            }
        }