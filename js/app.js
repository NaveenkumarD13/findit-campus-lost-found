document.addEventListener("DOMContentLoaded", function() {
    renderNavbarUser();
    loadRecentReports();
});

// 1. DYNAMIC NAVBAR USER LOGIC
function renderNavbarUser() {
    var userRaw = localStorage.getItem('loggedInUser') || sessionStorage.getItem('loggedInUser');
    var navActions = document.getElementById('navActions');
    
    if (userRaw && navActions) {
        var user = JSON.parse(userRaw);
        var userName = user.name || user.username || user.email || 'User';
        var role = (user.role || 'Student').toUpperCase();
        var badgeClass = (role === 'ADMIN') ? 'user-badge admin-badge' : 'user-badge';

        navActions.innerHTML = 
            '<div style="display: flex; align-items: center; gap: 10px; text-align: right;">' +
                '<i class="fa-solid fa-circle-user" style="font-size: 1.8rem; color: #4f46e5;"></i>' +
                '<div>' +
                    '<div style="font-weight: 700; color: var(--text-primary, #0f172a); font-size: 0.95rem;">' + userName + '</div>' +
                    '<span class="' + badgeClass + '">' + role + '</span>' +
                '</div>' +
            '</div>' +
            '<button onclick="logoutUser()" class="btn btn-outline" style="padding: 6px 12px; margin-left: 10px; cursor: pointer; border-radius: 6px; border:1px solid #ef4444; color:#ef4444; background:none;">Logout</button>';
    }
}

function logoutUser() {
    localStorage.removeItem('loggedInUser');
    sessionStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    window.location.reload();
}

// 2. ICON RESOLVER WITH STRICT KEY ICON FIX
function resolveIcon(item) {
    var name = (item.itemName || '').toLowerCase();
    var category = (item.category || '').toLowerCase();

    if (name.includes('key') || category.includes('key')) {
        return 'fa-key';
    } else if (name.includes('laptop') || name.includes('hp') || category.includes('electronic')) {
        return 'fa-laptop';
    } else if (name.includes('id') || category.includes('id')) {
        return 'fa-id-card';
    } else if (name.includes('wallet') || category.includes('personal')) {
        return 'fa-wallet';
    }
    return item.icon || 'fa-box';
}

// 3. RECOVERED VS ACTIVE STATS & CARDS RENDERER
function loadRecentReports() {
    var allReports = JSON.parse(localStorage.getItem('findit_all_reports') || '[]');
    var grid = document.getElementById('recentItemsGrid');
    
    var recoveredCount = 0;
    var activeCount = 0;
    var html = '';

    allReports.forEach(function(item) {
        var status = (item.status || '').toUpperCase();
        
        if (status === 'CLAIMED' || status === 'RECOVERED' || status === 'RESOLVED') {
            recoveredCount++;
        } else {
            activeCount++;
        }

        var isLost = (item.type || 'Lost').toLowerCase() === 'lost';
        var iconClass = resolveIcon(item);
        var iconColor = isLost ? '#ef4444' : '#16a34a';

        html += '<div style="background:var(--card-bg, #fff); border-radius:12px; padding:20px; box-shadow:0 2px 8px rgba(0,0,0,0.06); display:flex; flex-direction:column; justify-content:space-between;">' +
                    '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">' +
                        '<i class="fa-solid ' + iconClass + '" style="font-size:2rem; color:' + iconColor + ';"></i>' +
                        '<span style="font-size:0.7rem; font-weight:800; padding:3px 10px; border-radius:12px; background:' + (isLost ? '#fee2e2' : '#dcfce7') + '; color:' + iconColor + ';">' + (item.type || 'LOST').toUpperCase() + '</span>' +
                    '</div>' +
                    '<div>' +
                        '<h3 style="margin:5px 0; font-size:1.1rem; color:var(--text-primary, #0f172a);">' + item.itemName + '</h3>' +
                        '<p style="color:#64748b; font-size:0.85rem; margin-bottom:15px;">' + (item.description || 'No description') + '</p>' +
                    '</div>' +
                    '<div style="border-top:1px solid #f1f5f9; padding-top:10px; font-size:0.75rem; color:#94a3b8; display:flex; flex-direction:column; gap:4px;">' +
                        '<span><i class="fa-solid fa-location-dot"></i> ' + item.location + '</span>' +
                    '</div>' +
                '</div>';
    });

    if (grid) {
        if (allReports.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 30px;">No campus activity reports recorded yet.</p>';
        } else {
            grid.innerHTML = html;
        }
    }

    // UPDATE HERO STATS
    var recElem = document.getElementById('heroRecoveredCount');
    var actElem = document.getElementById('heroActiveCount');
    if (recElem) recElem.textContent = recoveredCount;
    if (actElem) actElem.textContent = activeCount;
}
