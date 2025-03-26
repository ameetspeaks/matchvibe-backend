const express = require('express');
const cors = require('cors');
const supabase = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

// Users Routes
app.get('/users', async (req, res) => {
    try {
        const { data, error } = await supabase.from('users').select('*');
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/users', async (req, res) => {
    try {
        const { data, error } = await supabase.from('users').insert(req.body);
        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('users')
            .update(req.body)
            .eq('id', req.params.id);
        if (error) throw error;
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const { error } = await supabase
            .from('users')
            .delete()
            .eq('id', req.params.id);
        if (error) throw error;
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Teams Routes
app.get('/teams', async (req, res) => {
    try {
        const { data, error } = await supabase.from('teams').select('*');
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/teams', async (req, res) => {
    try {
        const { data, error } = await supabase.from('teams').insert(req.body);
        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/teams/:id', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('teams')
            .update(req.body)
            .eq('id', req.params.id);
        if (error) throw error;
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/teams/:id', async (req, res) => {
    try {
        const { error } = await supabase
            .from('teams')
            .delete()
            .eq('id', req.params.id);
        if (error) throw error;
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Players Routes
app.get('/players', async (req, res) => {
    try {
        let query = supabase.from('players').select('*');
        if (req.query.team_id) {
            query = query.eq('team_id', req.query.team_id);
        }
        const { data, error } = await query;
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/players', async (req, res) => {
    try {
        const { data, error } = await supabase.from('players').insert(req.body);
        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/players/:id', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('players')
            .update(req.body)
            .eq('id', req.params.id);
        if (error) throw error;
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/players/:id', async (req, res) => {
    try {
        const { error } = await supabase
            .from('players')
            .delete()
            .eq('id', req.params.id);
        if (error) throw error;
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Matches Routes
app.get('/matches', async (req, res) => {
    try {
        let query = supabase.from('matches').select('*');
        if (req.query.team_id) {
            query = query.or(`team_a_id.eq.${req.query.team_id},team_b_id.eq.${req.query.team_id}`);
        }
        const { data, error } = await query;
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/matches', async (req, res) => {
    try {
        const { data, error } = await supabase.from('matches').insert(req.body);
        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/matches/:id', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('matches')
            .update(req.body)
            .eq('id', req.params.id);
        if (error) throw error;
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/matches/:id', async (req, res) => {
    try {
        const { error } = await supabase
            .from('matches')
            .delete()
            .eq('id', req.params.id);
        if (error) throw error;
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Tournaments Routes
app.get('/tournaments', async (req, res) => {
    try {
        const { data, error } = await supabase.from('tournaments').select('*');
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/tournaments', async (req, res) => {
    try {
        const { data, error } = await supabase.from('tournaments').insert(req.body);
        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/tournaments/:id', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('tournaments')
            .update(req.body)
            .eq('id', req.params.id);
        if (error) throw error;
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/tournaments/:id', async (req, res) => {
    try {
        const { error } = await supabase
            .from('tournaments')
            .delete()
            .eq('id', req.params.id);
        if (error) throw error;
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Roles Routes
app.get('/roles', async (req, res) => {
    try {
        const { data, error } = await supabase.from('roles').select('*');
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/roles', async (req, res) => {
    try {
        const { data, error } = await supabase.from('roles').insert(req.body);
        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/roles/:id', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('roles')
            .update(req.body)
            .eq('id', req.params.id);
        if (error) throw error;
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/roles/:id', async (req, res) => {
    try {
        const { error } = await supabase
            .from('roles')
            .delete()
            .eq('id', req.params.id);
        if (error) throw error;
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Usertype Routes
app.get('/usertype', async (req, res) => {
    try {
        const { data, error } = await supabase.from('usertype').select('*');
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/usertype', async (req, res) => {
    try {
        const { data, error } = await supabase.from('usertype').insert(req.body);
        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/usertype/:id', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('usertype')
            .update(req.body)
            .eq('id', req.params.id);
        if (error) throw error;
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/usertype/:id', async (req, res) => {
    try {
        const { error } = await supabase
            .from('usertype')
            .delete()
            .eq('id', req.params.id);
        if (error) throw error;
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 